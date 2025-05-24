interface UmamiConfig {
  scriptUrl: string
  websiteId: string
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

initUmamiAnalytics({
  scriptUrl: import.meta.env.VITE_UMAMI_SCRIPT_URL,
  websiteId: import.meta.env.VITE_UMAMI_WEBSITE_ID,
})
