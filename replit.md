# Zola - AI Chat Application

## Overview
Zola is a Next.js 16 AI chat application that supports multiple AI providers including OpenAI, Anthropic, Google, Mistral, xAI, and OpenRouter. It uses Supabase for authentication and data storage.

## Project Structure
- `app/` - Next.js App Router pages and API routes
  - `api/` - Backend API endpoints for chat, models, user preferences
  - `auth/` - Authentication pages and callbacks
  - `c/[chatId]/` - Individual chat pages
  - `p/[projectId]/` - Project pages
  - `share/[chatId]/` - Public chat sharing
  - `components/` - Page-specific components
- `components/` - Reusable UI components
- `lib/` - Utility libraries
- `utils/` - Helper functions
- `public/` - Static assets

## Tech Stack
- **Framework**: Next.js 16 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives, shadcn/ui patterns
- **State Management**: Zustand, TanStack Query
- **AI SDK**: Vercel AI SDK with multiple provider integrations
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)

## Development

### Running Locally
```bash
npm run dev -- --hostname 0.0.0.0 --port 5000
```

### Build
```bash
npm run build
```

### Production
```bash
npm run start -- -p 5000
```

## Configuration

### Required Environment Variables
This app requires Supabase configuration and API keys for the AI providers you want to use:

- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (for server-side)

### AI Provider Keys (as needed)
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `GOOGLE_GENERATIVE_AI_API_KEY`
- `MISTRAL_API_KEY`
- `XAI_API_KEY`
- `OPENROUTER_API_KEY`

## Recent Changes
- December 30, 2025: Completed full migration to AI SDK v5.
  - Updated `LanguageModelV1` to `LanguageModel` in `lib/models/types.ts` and `lib/openproviders/index.ts`.
  - Added type assertions to handle property mismatches in `lib/openproviders/index.ts` and `lib/hooks/use-chat-preview.tsx`.
  - Temporarily disabled experimental MCP client functionality in `lib/mcp/` to resolve build failures.
  - Fixed `UIMessage` and `CoreMessage` type alignment across the codebase.
- December 29, 2025: Resolved critical deployment and runtime issues.

## Notes
- The app works in a limited mode without Supabase (no auth, no persistence)
- For full functionality, configure Supabase environment variables
- Ollama integration is optional - the app uses static model fallbacks

## User Preferences
(None documented yet)
