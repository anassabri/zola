// todo: fix this
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/components/ui/toast"
import { useChat } from "@ai-sdk/react"
import { useMemo } from "react"

type ModelConfig = {
  id: string
  name: string
  provider: string
}

type ModelChat = {
  model: ModelConfig
  messages: any[]
  isLoading: boolean
  append: (message: any, options?: any) => void
  stop: () => void
}

// Maximum number of models we support
const MAX_MODELS = 10

export function useMultiChat(models: ModelConfig[]): ModelChat[] {
  // Create a fixed number of useChat hooks to avoid conditional hook calls
  const chatHooks = Array.from({ length: MAX_MODELS }, (_, index) =>
    // todo: fix this
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useChat({
      // api: "/api/chat", // The useChat hook no longer accepts 'api' directly in this version
      onError: (error) => {
        const model = models[index]
        if (model) {
          console.error(`Error with ${model.name}:`, error)
          toast({
            title: `Error with ${model.name}`,
            description: error.message,
            status: "error",
          })
        }
      },
    })
  )

  // Map only the provided models to their corresponding chat hooks
  const activeChatInstances = useMemo(() => {
    const instances = models.slice(0, MAX_MODELS).map((model, index) => {
      const chatHook = chatHooks[index]

      return {
        model,
        messages: (chatHook as any).messages,
        isLoading: (chatHook as any).status === "streaming" || (chatHook as any).status === "submitted",
        append: (message: any, options?: any) => {
          return (chatHook as any).append(message, options)
        },
        stop: (chatHook as any).stop,
      }
    })

    return instances
    // todo: fix this
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [models, ...chatHooks.flatMap((chat) => [(chat as any).messages, (chat as any).status])])

  return activeChatInstances
}
