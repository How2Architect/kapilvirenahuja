import { useEffect, useState } from 'react'
import { getContactContent } from '@/lib/content'
import type { ContactContent } from '@/lib/types'

const ContactSection = () => {
  const [content, setContent] = useState<ContactContent | null>(null)

  useEffect(() => {
    getContactContent().then(setContent).catch(console.error)
  }, [])

  if (!content) return null

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--color-gray-900)', color: 'var(--color-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="heading-2" style={{ marginBottom: '2rem', color: 'var(--color-white)' }}>
            {content.title}
          </h2>
          <p className="body-large" style={{ marginBottom: '3rem', color: 'var(--color-gray-300)' }}>
            {content.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${content.email}`} className="btn btn-primary">Email Me</a>
            <a href={content.social.linkedin} className="btn btn-secondary">LinkedIn</a>
            <a href={content.social.github} className="btn btn-secondary">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection