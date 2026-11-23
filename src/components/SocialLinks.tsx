import Link from 'next/link'
import { Github, Linkedin, GraduationCap } from 'lucide-react'

const linkClassName =
  'text-muted-foreground hover:text-foreground transition-colors'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function OrcidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 5.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3zM15.9 17h-1.7v-4.2c0-1.1-.7-1.8-1.7-1.8-.9 0-1.6.6-1.9 1.2v4.8H8.9V9.5h1.7v1.1c.4-.7 1.3-1.3 2.5-1.3 1.8 0 2.8 1.2 2.8 3.1V17z" />
    </svg>
  )
}

type SocialLinksProps = {
  className?: string
}

export function SocialLinks({ className = 'flex items-center gap-3' }: SocialLinksProps) {
  return (
    <div className={className}>
      <Link
        href="https://github.com/Fortranibal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={linkClassName}
      >
        <Github className="h-[18px] w-[18px]" />
      </Link>
      <Link
        href="https://linkedin.com/in/anibal-guerrero"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkClassName}
      >
        <Linkedin className="h-[18px] w-[18px]" />
      </Link>
      <Link
        href="https://scholar.google.com/citations?user=t6kLm3cAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Scholar"
        className={linkClassName}
      >
        <GraduationCap className="h-[18px] w-[18px]" />
      </Link>
      <Link
        href="https://orcid.org/0009-0004-2571-2853"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ORCID"
        className={linkClassName}
      >
        <OrcidIcon className="h-[18px] w-[18px]" />
      </Link>
      <Link
        href="https://x.com/fortranibal"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className={linkClassName}
      >
        <XIcon className="h-[18px] w-[18px]" />
      </Link>
    </div>
  )
}
