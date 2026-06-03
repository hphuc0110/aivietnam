export {}

declare global {
  interface Window {
    fbq?: (
      command: 'track' | 'init',
      eventNameOrPixelId: string,
      params?: Record<string, string | number | boolean>
    ) => void
  }
}
