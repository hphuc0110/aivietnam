/** Slug sự kiện có gắn Meta Pixel */
export const META_PIXEL_EVENT_SLUGS = [
  'toa-dam-nhan-luc-ai',
  'workshop-ai-thuc-chien',
] as const

/** @deprecated Dùng META_PIXEL_EVENT_SLUGS */
export const WORKSHOP_EVENT_SLUG = 'workshop-ai-thuc-chien'

/** Meta Pixel ID — tọa đàm nhân lực AI */
export const META_PIXEL_ID = '835022529328012'

export function hasMetaPixel(slug: string): boolean {
  return (META_PIXEL_EVENT_SLUGS as readonly string[]).includes(slug)
}

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

export function trackMetaLead(eventSlug: string): void {
  trackMetaEvent('Lead', { content_name: eventSlug })
}
