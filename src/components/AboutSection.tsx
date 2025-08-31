import { useEffect, useState } from 'react'
import { getAboutContent } from '@/lib/content'
import type { AboutContent } from '@/lib/types'

const AboutSection = () => {
  const [content, setContent] = useState<AboutContent | null>(null)

  useEffect(() => {
    getAboutContent().then(setContent).catch(console.error)
  }, [])

  if (!content) {return null}

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
          <div>
            <h2 className="heading-2" style={{ marginBottom: '2rem' }}>{content.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {content.paragraphs.map((paragraph, index) => (
                <p key={index} className="body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="stat-grid">
              {content.stats.map((stat, index) => (
                <div key={index} className="stat">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection