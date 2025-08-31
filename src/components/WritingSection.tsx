import { useEffect, useState } from 'react'
import { getWritingContent } from '@/lib/content'
import type { WritingContent } from '@/lib/types'

const WritingSection = () => {
  const [content, setContent] = useState<WritingContent | null>(null)

  useEffect(() => {
    getWritingContent().then(setContent).catch(console.error)
  }, [])

  if (!content) {return null}

  return (
    <section id="writing" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
      <div className="container">
        <h2 className="heading-2" style={{ marginBottom: '3rem' }}>{content.title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {content.articles.map((article) => (
            <article key={article.id} className="card">
              <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                {article.title}
              </h3>
              <p className="body" style={{ marginBottom: '1rem' }}>
                {article.description}
              </p>
              <p className="small">{article.date} • {article.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WritingSection