import { AlertCircle, CheckCircle, Loader2 } from "lucide-react"

interface DialogueBoxProps {
  text: string
  type: "agent" | "thinking" | "success" | "error"
}

export default function DialogueBox({ text, type }: DialogueBoxProps) {
  const getStyles = () => {
    switch (type) {
      case "thinking":
        return "bg-slate-800/50 border border-slate-700 text-slate-400 italic"
      case "success":
        return "bg-green-500/10 border border-green-500/30 text-green-100"
      case "error":
        return "bg-red-500/10 border border-red-500/30 text-red-100"
      case "agent":
      default:
        return "bg-cyan-500/10 border border-cyan-500/30 text-cyan-100 shadow-lg shadow-cyan-500/5"
    }
  }

  const renderIcon = () => {
    switch (type) {
      case "thinking":
        return <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
      case "success":
        return <CheckCircle className="w-4 h-4 inline mr-2" />
      case "error":
        return <AlertCircle className="w-4 h-4 inline mr-2" />
      default:
        return null
    }
  }

  return (
    <div
      className={`p-3 rounded-lg text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300 ${getStyles()}`}
    >
      {renderIcon()}
      {text}
    </div>
  )
}
