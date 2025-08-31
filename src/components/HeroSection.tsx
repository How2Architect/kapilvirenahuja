import { useEffect, useState } from 'react'
import { getHeroContent } from '@/lib/content'
import type { HeroContent } from '@/lib/types'

const HeroSection = () => {
  const [content, setContent] = useState<HeroContent | null>(null)

  useEffect(() => {
    getHeroContent().then(setContent).catch(console.error)
  }, [])

  if (!content) {return null}

  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <h1 className="hero-title" style={{ marginBottom: '2rem' }}>
            {content.title}
          </h1>
          <p className="body-large" style={{ marginBottom: '3rem' }}>
            {content.subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {content.buttons.map((button, index) => (
              <a key={index} href={button.href} className={`btn btn-${button.variant}`}>
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection