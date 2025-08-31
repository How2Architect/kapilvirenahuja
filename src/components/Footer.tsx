import { useEffect, useState } from 'react'
import { getFooterContent } from '@/lib/content'
import type { FooterContent } from '@/lib/types'

const Footer = () => {
  const [content, setContent] = useState<FooterContent | null>(null)

  useEffect(() => {
    getFooterContent().then(setContent).catch(console.error)
  }, [])

  if (!content) return null

  return (
    <footer style={{ backgroundColor: 'var(--color-gray-900)', padding: '2rem 0', borderTop: '1px solid var(--color-gray-800)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', color: 'var(--color-gray-400)' }} className="small">
          {content.copyright} {content.tagline}
        </p>
      </div>
    </footer>
  )
}

export default Footer