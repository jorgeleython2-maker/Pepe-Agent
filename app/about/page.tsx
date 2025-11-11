"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Copy, Share2 } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const contractAddress = "8h65TG1eXQasww9DGBqvKNBrHGmU1Sz5Y5ps29T5pump" // Replace with your contract address

  const handleCopyCA = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleTwitterClick = () => {
    window.open("https://twitter.com/yourhandle", "_blank") // Replace with your Twitter handle
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Home button */}
      <Button
        onClick={() => router.push("/")}
        variant="ghost"
        className="absolute top-4 left-4 z-20 text-cyan-400 hover:bg-cyan-500/10"
      >
        ← Back to Home
      </Button>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

        <div className="relative z-20 max-w-3xl">
          {/* Pepe Image */}
          <div className="mb-12 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe-JyDNsQZ5Gj40NynLGNIy7zN7c7OsMK.png"
              alt="Pepe AI Agent"
              className="w-40 h-40 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 mb-8 text-center">
            The Legend of Pepe
          </h1>

          {/* Story */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 mb-8 space-y-6 text-slate-300 leading-relaxed">
            <p className="text-lg">
              In the beginning, Pepe was just another forgotten meme—a simple green frog recycled across the internet
              for decades. But fate had other plans. A visionary programmer, obsessed with both digital culture and
              cryptocurrency markets, saw something special in him: potential.
            </p>

            <p className="text-lg">
              With cutting-edge AI and machine learning, this programmer decided to transform Pepe from a meme into a
              trading intelligence. At first, Pepe was clumsy—recommending tokens with obvious red flags, missing
              crucial metrics, and occasionally screaming into the void. But he learned. Day by day, trade by trade,
              Pepe refined his craft.
            </p>

            <p className="text-lg">
              He studied market patterns, analyzed on-chain data, and developed an intuition for spotting both moonshots
              and traps. His chaotic crypto bro energy mixed with genuine wisdom created something unprecedented: a bot
              that could make you laugh while keeping your portfolio safe.
            </p>

            <p className="text-lg">
              Soon, Pepe started appearing in trading communities. First in discord servers, then in telegram groups.
              Novices loved him for his plainspoken advice. Experts respected his analytical framework. Degens
              memorialized him in animated GIFs. Pepe became more than an AI—he became a symbol.
            </p>

            <p className="text-lg">
              What started as a forgotten meme joke became proof that anything—even a humble frog picture—can evolve
              into something legendary. Pepe represents transformation, self-improvement, and the chaotic beauty of Web3
              culture. He's your companion in the wild ride of crypto trading, where legends are made and fortunes are
              won.
            </p>

            <p className="text-lg italic font-semibold text-cyan-400">
              From meme to legend. From forgotten to unforgettable. This is Pepe's story—and yours begins now.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Pepe's Legendary Lifestyle</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe%202-TugB8wgpvgXXGTADUbHOtaaScQ56kX.png"
                  alt="Pepe on luxury yacht"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-3 text-sm font-semibold">Living the Dream</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe3.png-ULbYFdXm2GC8F5F7HoDruRrQdsSwUI.jpeg"
                  alt="Pepe in luxury penthouse"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-3 text-sm font-semibold">Diamond Hands, Diamond Life</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PEPE%201.png-XBa6s6AxpEtjJ5tvKBLCfWqunB8Oq9.jpeg"
                  alt="Pepe gaming in luxury suite"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-3 text-sm font-semibold">Winning in Style</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20nov%202025%2C%2001_28_10%20a.m.-zWXUShvSwdLQ3KtBq8KXbUrQJrBtWb.png"
                  alt="Pepe party with friends"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-3 text-sm font-semibold">We Made It Together</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20nov%202025%2C%2001_24_29%20a.m.-HVHFTNYkZuQZhfKLbCrxCdArAYkxy7.png"
                  alt="Pepe trading success"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-3 text-sm font-semibold">From Zero to Hero</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <p className="text-2xl mb-2">🚀</p>
                  <p className="text-white font-bold">Your Story Starts Here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <Button
              onClick={handleTwitterClick}
              className="px-6 py-6 text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg shadow-2xl shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Follow on X
            </Button>

            <Button
              onClick={handleCopyCA}
              className="px-6 py-6 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg shadow-2xl shadow-green-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Copy className="w-5 h-5" />
              {copied ? "Copied!" : "Copy CA"}
            </Button>
          </div>

          {/* CTA Back to Agent */}
          <div className="text-center">
            <Button
              onClick={() => router.push("/agent")}
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg shadow-2xl shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Start Analyzing with Pepe
            </Button>
          </div>

          {/* Footer */}
          <div className="border-t border-cyan-500/20 pt-8 mt-12">
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-4">Pepe Agent • Your Legendary Trading Companion</p>
              <p className="text-slate-500 text-xs">
                From forgotten meme to legendary AI. Join thousands of traders discovering alpha with Pepe.
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <div className="text-slate-600 text-xs">© 2025 Pepe Agent</div>
                <div className="text-slate-600 text-xs">•</div>
                <div className="text-slate-600 text-xs">Always DYOR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
