import Gemini from "@/components/icons/gemini"
import Google from "@/components/icons/google"

export type Provider = {
  id: string
  name: string
  available: boolean
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const PROVIDERS: Provider[] = [
  {
    id: "gemini",
    name: "Gemini",
    icon: Gemini,
  },
  {
    id: "google",
    name: "Google",
    icon: Google,
  },
] as Provider[]
