'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { SocialLinks } from '@/components/SocialLinks'

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false })

const brandClassName = 'text-sm font-medium text-foreground'
const navLinkClassName =
  'text-sm text-muted-foreground hover:text-foreground transition-colors'

type SiteHeaderProps = {
  /** Max width container class, e.g. max-w-3xl or max-w-4xl */
  maxWidthClass?: string
  /** Full brand text (desktop) */
  brandLabel: string
  /** Short brand for mobile to keep a single line */
  brandShortLabel?: string
  /** When set, brand is a link (projects page) */
  brandHref?: string
  /** Extra nav links (Publications, Projects, …) */
  navLinks?: ReactNode
}

function Brand({
  label,
  href,
  className,
}: {
  label: string
  href?: string
  className?: string
}) {
  if (href) {
    return (
      <Link href={href} className={className ?? brandClassName}>
        {label}
      </Link>
    )
  }
  return <span className={className ?? brandClassName}>{label}</span>
}

/**
 * Responsive site header. Desktop (sm+) keeps the single-row layout with socials.
 * Mobile stacks brand + toggle, then nav links; social icons remain in the footer.
 */
export function SiteHeader({
  maxWidthClass = 'max-w-3xl',
  brandLabel,
  brandShortLabel,
  brandHref,
  navLinks,
}: SiteHeaderProps) {
  const shortLabel = brandShortLabel ?? brandLabel

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className={`${maxWidthClass} mx-auto w-full px-5 sm:px-6 py-4`}>
        {/* Mobile (<640px) */}
        <div className="flex flex-col gap-3 sm:hidden min-w-0">
          <div className="flex items-center justify-between gap-3 min-w-0">
            <div className="min-w-0 truncate">
              <Brand
                label={shortLabel}
                href={brandHref}
                className={`${brandClassName} whitespace-nowrap`}
              />
            </div>
            <div className="shrink-0">
              <ThemeToggle />
            </div>
          </div>
          {navLinks ? (
            <nav className="flex items-center gap-4 min-w-0 flex-wrap">{navLinks}</nav>
          ) : null}
        </div>

        {/* Desktop (sm+) — original single-row layout */}
        <div className="hidden sm:flex items-center justify-between gap-5 min-w-0">
          <Brand label={brandLabel} href={brandHref} />
          <div className="flex items-center gap-5 min-w-0">
            {navLinks ? (
              <nav className="flex items-center gap-5">{navLinks}</nav>
            ) : null}
            <div className="flex items-center gap-3 shrink-0">
              <SocialLinks />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { navLinkClassName }
