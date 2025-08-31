import { useEffect, useState } from 'react'
import { getSpeakingContent } from '@/lib/content'
import type { SpeakingContent } from '@/lib/types'

const SpeakingSection = () => {
  const [content, setContent] = useState<SpeakingContent | null>(null)

  useEffect(() => {
    getSpeakingContent().then(setContent).catch(console.error)
  }, [])

  if (!content) {return null}

  return (
    <section id="speaking" className="section">
      <div className="container">
        <h2 className="heading-2" style={{ marginBottom: '3rem' }}>{content.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {content.events.map((event) => (
            <div key={event.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>{event.title}</h3>
                  <p className="body" style={{ marginBottom: '0.5rem' }}>
                    &ldquo;{event.topic}&rdquo;
                  </p>
                  <p className="small">
                    {event.description}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="small" style={{ fontWeight: 600 }}>{event.date}</p>
                  <p className="small">{event.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakingSection