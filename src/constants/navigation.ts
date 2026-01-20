import ICInstagram from '@/components/icons/ICInstagram'
import ICRss from '@/components/icons/ICRss'
import ICTwitter from '@/components/icons/ICTwitter'
import ICYoutube from '@/components/icons/ICYoutube'
import { ElementType } from 'react'

interface NavLink {
  label: string
  href: string
}

interface SocialLink {
  id: string
  label: string
  Icon: ElementType
  href: string
}

export const HEADER_LINKS: NavLink[] = [
  { label: 'Magazine', href: '/magazine' },
  { label: 'Authors', href: '/authors' },
  { label: 'Podcast', href: '/podcast' },
] as const

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'ig',
    label: 'Instagram',
    Icon: ICInstagram,
    href: 'https://instagram.com/...',
  },
  { id: 'tw', label: 'Twitter', Icon: ICTwitter, href: 'https://twitter.com/...' },
  { id: 'yt', label: 'Youtube', Icon: ICYoutube, href: 'https://youtube.com/...' },
  { id: 'rss', label: 'RSS', Icon: ICRss, href: '/rss' },
] as const

export const FOOTER_LINKS: NavLink[] = [
  { label: 'Art', href: '/art' },
  { label: 'Design', href: '/design' },
  { label: 'Architecture', href: '/architecture' },

  { label: 'Magazine', href: '/magazine' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Authors', href: '/authors' },

  { label: 'Styleguide', href: '/styleguide' },
  { label: 'Licensing', href: '/licensing' },
  { label: 'Changelog', href: '/changelog' },
] as const
