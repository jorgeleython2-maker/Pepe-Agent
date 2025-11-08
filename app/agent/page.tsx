"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import PepeAgent from "@/components/pepe-agent"
import SearchBar from "@/components/search-bar"
import ChartContainer from "@/components/chart-container"
import DialogueBox from "@/components/dialogue-box"
import { useDialogue } from "@/hooks/use-dialogue"
import { Button } from "@/components/ui/button"

export default function AgentPage() {
  const router = useRouter()
  const [pairAddress, setPairAddress] = useState("")
  const [tokenName, setTokenName] = useState("")
  const [chartReady, setChartReady] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [pepeMessage, setPepeMessage] = useState("")
  const [messageOpacity, setMessageOpacity] = useState(1)
  const dialogueEndRef = useRef<HTMLDivElement>(null)
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const [currentPairData, setCurrentPairData] = useState<any>(null)
  const { dialogues, addThinkingDialogue, replaceLastDialogue, addDialogue, clearDialogues } = useDialogue()

  const scrollToBottom = () => {
    dialogueEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [dialogues])

  useEffect(() => {
    if (chartReady && currentPairData && !isAnalyzing) {
      updateIntervalRef.current = setInterval(() => {
        analyzeToken(currentPairData)
      }, 20000)

      return () => {
        if (updateIntervalRef.current) {
          clearInterval(updateIntervalRef.current)
        }
      }
    }
  }, [chartReady, currentPairData, isAnalyzing])

  const handleTokenSearch = async (ca: string) => {
    try {
      clearDialogues()
      addThinkingDialogue("Searching token...")
      setIsAnalyzing(true)
      setPepeMessage("")
      setMessageOpacity(1)

      const res = await fetch(`https://api.dexscreener.com/latest/dex/search?q=${ca}&chainId=solana`)
      const data = await res.json()

      if (!data.pairs || data.pairs.length === 0) {
        replaceLastDialogue("Token not found. Try another CA.", "error")
        setPepeMessage("Token not found")
        setIsAnalyzing(false)
        return
      }

      const pair = data.pairs[0]
      const name = pair.baseToken.symbol || "TOKEN"

      setPairAddress(pair.pairAddress)
      setTokenName(name)
      setChartReady(true)
      setCurrentPairData(pair)

      setPepeMessage("Chart loaded. Analyzing...")
      replaceLastDialogue("Chart loaded. Starting analysis...", "thinking")

      setTimeout(() => analyzeToken(pair), 1500)
    } catch (error) {
      console.error("Search error:", error)
      replaceLastDialogue("Error fetching token data. Try again.", "error")
      setPepeMessage("Search error")
      setIsAnalyzing(false)
    }
  }

  const analyzeToken = async (pairData: any) => {
    try {
      setMessageOpacity(0)

      const tokenData: any = {
        symbol: pairData.baseToken.symbol,
        market_cap_usd: pairData.marketCap ? Number.parseFloat(pairData.marketCap) : 0,
        volume_24h_usd: pairData.volume?.h24 ? Number.parseFloat(pairData.volume.h24) : 0,
        liquidity_usd: pairData.liquidity?.usd ? Number.parseFloat(pairData.liquidity.usd) : 0,
        price_change_1h: pairData.priceChange?.h1 ? Number.parseFloat(pairData.priceChange.h1) : 0,
        holders_count: 0,
        burn_percentage: 0,
        dev_holds: 0,
        engagement_score: 0,
        age_hours: 1,
        scam_alerts: false,
      }

      setPepeMessage("Analyzing token...")
      clearDialogues()
      addThinkingDialogue("Analyzing with CryptoAgent...")

      const response = await fetch("/api/analyze-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tokenData }),
      })

      if (!response.ok) {
        throw new Error("Agent analysis failed")
      }

      const analysis = await response.json()

      const mainMessage = `${analysis.evaluation}\n\nScore: ${analysis.score}/10`
      setPepeMessage(mainMessage)

      setTimeout(() => {
        setMessageOpacity(1)
      }, 100)

      replaceLastDialogue(mainMessage, "agent")

      setTimeout(() => {
        if (analysis.matchedGood && analysis.matchedGood.length > 0) {
          const goodMsg = `✅ ${analysis.matchedGood
            .slice(0, 3)
            .map((r: any) => r.name)
            .join("\n✅ ")}`
          addDialogue(goodMsg, "success")
        }
      }, 1500)

      setTimeout(() => {
        if (analysis.matchedBad && analysis.matchedBad.length > 0) {
          const badMsg = `⚠️ ${analysis.matchedBad
            .slice(0, 3)
            .map((r: any) => r.name)
            .join("\n⚠️ ")}`
          addDialogue(badMsg, "error")
        }
      }, 3000)
    } catch (error) {
      console.error("Analysis error:", error)
      setPepeMessage("Analysis error")
      setMessageOpacity(1)
      replaceLastDialogue("Error analyzing token", "error")
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 flex h-screen flex-col">
        {/* TOP PANEL - Back button + Search Bar */}
        <div className="flex-shrink-0 border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm flex flex-col gap-2 p-3">
          <div>
            <Button
              onClick={() => router.push("/")}
              variant="ghost"
              className="text-cyan-400 hover:bg-cyan-500/10 text-sm"
            >
              ← Back to Home
            </Button>
          </div>

          <div>
            <SearchBar onSearch={handleTokenSearch} />
            {tokenName && (
              <div className="mt-2 text-center">
                <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                  {tokenName}/SOL
                </h2>
              </div>
            )}
          </div>
        </div>

        {/* MAIN CONTENT - Two columns */}
        <div className="flex flex-1 min-h-0 gap-2 p-2">
          {/* LEFT PANEL - Pepe */}
          <div className="w-2/5 flex flex-col gap-2 min-h-0">
            {/* Pepe Agent Section - Fixed height, no overflow */}
            <div className="flex-shrink-0 h-80 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/30 to-slate-900/10 flex items-center justify-center p-2 overflow-hidden">
              <PepeAgent
                isAnalyzing={isAnalyzing}
                currentResponse={pepeMessage}
                messageOpacity={messageOpacity}
                score={currentPairData?.marketCap ? 5 : 5}
              />
            </div>

            {/* Analysis Factors Section - Remaining space with scroll */}
            <div className="flex-1 min-h-0 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/20 to-slate-900/10 p-3 overflow-hidden flex flex-col">
              <h3 className="text-xs font-bold text-cyan-400 mb-2 uppercase tracking-widest flex-shrink-0">
                Analysis Factors
              </h3>
              <div className="flex-1 min-h-0 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {dialogues.length > 0 ? (
                  <>
                    {dialogues.map((dialogue, idx) => (
                      <DialogueBox key={idx} text={dialogue.text} type={dialogue.type} />
                    ))}
                    <div ref={dialogueEndRef} />
                  </>
                ) : (
                  <p className="text-slate-500 text-xs">Search a token to see analysis</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL - Chart */}
          <div className="w-3/5 flex flex-col min-h-0">
            <div className="flex-1 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/20 to-slate-900/10 overflow-hidden">
              {chartReady && pairAddress ? (
                <ChartContainer pairAddress={pairAddress} tokenName={tokenName} />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <div className="text-center">
                    <p className="text-lg mb-2">Enter a token CA to start</p>
                    <p className="text-sm text-slate-500">Pepe will analyze it for you</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 197, 234, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 234, 0.5);
        }
      `}</style>
    </div>
  )
}
