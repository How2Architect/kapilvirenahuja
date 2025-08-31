import type { 
  HeroContent, 
  AboutContent, 
  WorkContent, 
  SpeakingContent, 
  WritingContent,
  ContactContent,
  FooterContent
} from './types'

async function loadContent<T>(fileName: string): Promise<T> {
  try {
    const contentModule = await import(`@/data/${fileName}`) as { default?: T } & T
    return contentModule.default ?? contentModule
  } catch (error) {
    console.error(`Failed to load content from ${fileName}:`, error)
    throw new Error(`Content file ${fileName} not found`)
  }
}

export async function getHeroContent(): Promise<HeroContent> {
  return loadContent<HeroContent>('hero.json')
}

export async function getAboutContent(): Promise<AboutContent> {
  return loadContent<AboutContent>('about.json')
}

export async function getWorkContent(): Promise<WorkContent> {
  return loadContent<WorkContent>('work.json')
}

export async function getSpeakingContent(): Promise<SpeakingContent> {
  return loadContent<SpeakingContent>('speaking.json')
}

export async function getWritingContent(): Promise<WritingContent> {
  return loadContent<WritingContent>('writing.json')
}

export async function getContactContent(): Promise<ContactContent> {
  return loadContent<ContactContent>('contact.json')
}

export async function getFooterContent(): Promise<FooterContent> {
  return loadContent<FooterContent>('footer.json')
}