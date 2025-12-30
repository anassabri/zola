import { createGoogleGenerativeAI, google } from "@ai-sdk/google"
import type { LanguageModel } from "ai"
import { getProviderForModel } from "./provider-map"

type GoogleGenerativeAIProviderSettings = Parameters<typeof google>[1]

export function openproviders(
  modelId: string,
  settings?: GoogleGenerativeAIProviderSettings,
  apiKey?: string
): LanguageModel {
  const provider = getProviderForModel(modelId)

  if (provider === "google") {
    if (apiKey) {
      const googleProvider = createGoogleGenerativeAI({ apiKey })
      return googleProvider(modelId, settings) as any
    }
    return google(modelId, settings) as any
  }

  throw new Error(`Unsupported model: ${modelId}`)
}
