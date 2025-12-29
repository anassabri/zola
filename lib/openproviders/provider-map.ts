import type { Provider } from "./types"

// map each model ID to its provider
const MODEL_PROVIDER_MAP: Record<string, Provider> = {
  // Google Gemini
  "gemini-2.0-flash-001": "google",
  "gemini-1.5-flash": "google",
  "gemini-1.5-flash-latest": "google",
  "gemini-1.5-flash-001": "google",
  "gemini-1.5-flash-002": "google",
  "gemini-1.5-flash-8b": "google",
  "gemini-1.5-flash-8b-latest": "google",
  "gemini-1.5-flash-8b-001": "google",
  "gemini-1.5-pro": "google",
  "gemini-1.5-pro-latest": "google",
  "gemini-1.5-pro-001": "google",
  "gemini-1.5-pro-002": "google",
  "gemini-2.5-pro-exp-03-25": "google",
  "gemini-2.0-flash-lite-preview-02-05": "google",
  "gemini-2.0-pro-exp-02-05": "google",
  "gemini-2.0-flash-thinking-exp-01-21": "google",
  "gemini-2.5-flash-lite-preview-09-2025": "google",
  "gemini-2.0-flash-exp": "google",
  "gemini-exp-1206": "google",
  "gemma-3-27b-it": "google",
  "learnlm-1.5-pro-experimental": "google",
}

export function getProviderForModel(model: string): Provider {
  const provider = MODEL_PROVIDER_MAP[model]
  if (provider) return provider

  throw new Error(`Unknown provider for model: ${model}`)
}
