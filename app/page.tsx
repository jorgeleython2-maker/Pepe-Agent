"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Grid background effect */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-500" />

        <div className="relative z-20 text-center">
          {/* Pepe Image */}
          <div className="mb-12 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pepe-JyDNsQZ5Gj40NynLGNIy7zN7c7OsMK.png"
              alt="Pepe AI Agent"
              className="w-48 h-48 object-contain drop-shadow-2xl animate-bounce"
            />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 mb-6">
            Pepe Agent
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your legendary AI trading companion. Analyze crypto tokens with precision, wisdom, and legendary vibes.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <Button
              onClick={() => router.push("/agent")}
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg shadow-2xl shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Start Talking to Pepe Agent
            </Button>

            <Button
              onClick={() => router.push("/about")}
              variant="outline"
              className="px-8 py-6 text-lg font-bold border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
            >
              Learn Pepe's Story
            </Button>
          </div>

          {/* Footer text */}
          <p className="mt-16 text-slate-500 text-sm">Powered by advanced crypto analysis • Always DYOR</p>
        </div>
      </div>
    </div>
  )
}
