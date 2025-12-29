import { createGoogleGenerativeAI, google } from "@ai-sdk/google"
import type { LanguageModelV1 } from "@ai-sdk/provider"
import { getProviderForModel } from "./provider-map"
import type { GeminiModel, SupportedModel } from "./types"

type GoogleGenerativeAIProviderSettings = Parameters<typeof google>[1]

type ModelSettings<T extends SupportedModel> = T extends GeminiModel
  ? GoogleGenerativeAIProviderSettings
  : never

export type OpenProvidersOptions<T extends SupportedModel> = ModelSettings<T>

export function openproviders<T extends SupportedModel>(
  modelId: T,
  settings?: OpenProvidersOptions<T>,
  apiKey?: string
): LanguageModelV1 {
  const provider = getProviderForModel(modelId)

  if (provider === "google") {
    if (apiKey) {
      const googleProvider = createGoogleGenerativeAI({ apiKey })
      return googleProvider(
        modelId as GeminiModel,
        settings as GoogleGenerativeAIProviderSettings
      )
    }
    return google(
      modelId as GeminiModel,
      settings as GoogleGenerativeAIProviderSettings
    )
  }

  throw new Error(`Unsupported model: ${modelId}`)
}
