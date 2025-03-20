import type { EventHandlerRequest, H3Event } from 'h3'

export default defineOAuthGitHubEventHandler({
  config: {
    redirectURL: `${process.env.CF_PAGES_URL ?? 'http://localhost:3000'}/api/auth/github`,
  },
  async onSuccess(event: H3Event<EventHandlerRequest>, { user }: { user: any }) {
    await setUserSession(event, { user })
    return sendRedirect(event, '/panel')
  },
})
