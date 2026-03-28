import Image from 'next/image'

const LOGO_ALT = 'VIETNAM ARTIFICIAL INTELLIGENCE ACADEMY'

type SiteLogoProps = {
  className?: string
  priority?: boolean
}

/** Horizontal brand logo (`/public/logo.png`). */
export function SiteLogo({ className = 'h-9 sm:h-10 w-auto', priority = false }: SiteLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={LOGO_ALT}
      width={320}
      height={80}
      className={`object-contain object-left ${className}`}
      priority={priority}
    />
  )
}
