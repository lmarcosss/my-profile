interface UmamiConfig {
  scriptUrl: string
  websiteId: string
}

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, unknown>) => void }
  }
}

/** Prefer this on React Router <Link> — data-umami-event forces a full page load. */
export function trackEvent(event: string, data?: Record<string, unknown>) {
  window.umami?.track(event, data)
}

function initUmamiAnalytics({
  scriptUrl,
  websiteId,
}: UmamiConfig): void {
  try {
    if (!scriptUrl || !websiteId) {
      throw new Error('Missing required Umami configuration')
    }

    const script = document.createElement('script')
    script.defer = true
    script.src = scriptUrl
    script.setAttribute('data-website-id', websiteId)

    document.head.appendChild(script)
  } catch (error) {
    console.error('Failed to initialize Umami analytics:', error)
  }
}

// Only initialize Umami if environment variables are provided
const scriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL
const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID

if (scriptUrl && websiteId) {
  initUmamiAnalytics({
    scriptUrl,
    websiteId,
  })
}
