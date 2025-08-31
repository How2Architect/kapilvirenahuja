import { useEffect, useState } from 'react'
import { getWorkContent } from '@/lib/content'
import type { WorkContent } from '@/lib/types'

const WorkSection = () => {
  const [content, setContent] = useState<WorkContent | null>(null)

  useEffect(() => {
    getWorkContent().then(setContent).catch(console.error)
  }, [])

  if (!content) {return null}

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="heading-2" style={{ marginBottom: '3rem' }}>{content.title}</h2>
        <div className="grid grid-3">
          {content.services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="heading-3" style={{ marginBottom: '1rem' }}>{service.title}</h3>
              <p className="body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection