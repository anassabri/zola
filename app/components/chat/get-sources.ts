import type { UIMessage as MessageAISDK } from "@ai-sdk/ui-utils"

export function getSources(parts: any) {
  const sources = parts
    ?.filter(
      (part: any) => part.type === "source" || part.type === "tool-invocation" || part.type === "source-url" || part.type === "source-document"
    )
    .map((part: any) => {
      if (part.type === "source") {
        return part.source
      }

      if (part.type === "source-url" || part.type === "source-document") {
        return part
      }

      if (
        part.type === "tool-invocation" &&
        part.toolInvocation?.state === "result"
      ) {
        const result = part.toolInvocation.result

        if (
          part.toolInvocation.toolName === "summarizeSources" &&
          result?.result?.[0]?.citations
        ) {
          return result.result.flatMap((item: { citations?: unknown[] }) => item.citations || [])
        }

        return Array.isArray(result) ? result.flat() : result
      }

      return null
    })
    .filter(Boolean)
    .flat()

  const validSources =
    sources?.filter(
      (source) =>
        source && typeof source === "object" && source.url && source.url !== ""
    ) || []

  return validSources
}
