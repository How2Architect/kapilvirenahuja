export interface HeroContent {
  title: string
  subtitle: string
  buttons: Array<{
    text: string
    href: string
    variant: 'primary' | 'secondary'
  }>
}

export interface AboutContent {
  title: string
  paragraphs: string[]
  stats: Array<{
    value: string
    label: string
  }>
}

export interface WorkContent {
  title: string
  services: Array<{
    title: string
    description: string
  }>
}

export interface SpeakingEvent {
  id: number
  title: string
  topic: string
  description: string
  date: string
  location: string
}

export interface SpeakingContent {
  title: string
  events: SpeakingEvent[]
}

export interface Article {
  id: number
  title: string
  description: string
  date: string
  readTime: string
  link?: string
}

export interface WritingContent {
  title: string
  articles: Article[]
}

export interface ContactContent {
  title: string
  description: string
  email: string
  social: {
    linkedin: string
    github: string
    twitter: string
  }
}

export interface FooterContent {
  copyright: string
  tagline: string
}