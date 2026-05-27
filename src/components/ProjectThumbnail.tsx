import Image from 'next/image'
import type { ProjectItem } from '@/data/projects'

interface ProjectThumbnailProps {
  project: ProjectItem
  className?: string
}

export function ProjectThumbnail({ project, className = 'w-full h-full' }: ProjectThumbnailProps) {
  const { media } = project
  const objectFit = media.objectFit ?? 'cover'
  const objectPosition = media.objectPosition ?? 'center'

  if (media.type === 'video') {
    return (
      <video
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        className={`${className} object-cover`}
      />
    )
  }

  return (
    <Image
      src={media.src}
      alt={project.title}
      fill
      className={objectFit === 'contain' ? 'object-contain' : 'object-cover'}
      style={{ objectPosition }}
    />
  )
}
