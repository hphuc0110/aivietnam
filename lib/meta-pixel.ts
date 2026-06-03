/** Slug sự kiện có gắn Meta Pixel */
export const WORKSHOP_EVENT_SLUG = 'workshop-ai-thuc-chien'

/** Meta Pixel ID — tọa đàm workshop AI thực chiến */
export const META_PIXEL_ID = '835022529328012'

export function trackMetaEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return
  const fbq = window.fbq
  if (!fbq) return
  if (params) {
    fbq('track', eventName, params)
  } else {
    fbq('track', eventName)
  }
}

export function trackMetaLead(): void {
  trackMetaEvent('Lead', { content_name: WORKSHOP_EVENT_SLUG })
}
