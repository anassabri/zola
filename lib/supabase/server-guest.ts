import { createServerClient } from "@supabase/ssr"
import { isSupabaseEnabled } from "./config"

export async function createGuestServerClient() {
  if (!isSupabaseEnabled) {
    return null
  }

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE!,
    {
      cookies: {
        getAll: () => [],
        setAll: () => {},
      },
    }
  )
}
