import { useState, useEffect } from 'react'
import Link from 'next/link'

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
    <ul className="mobile-menu-links">
      <li><a href="#about" className="nav-link" onClick={onClose}>About</a></li>
      <li><a href="#work" className="nav-link" onClick={onClose}>Work</a></li>
      <li><a href="#writing" className="nav-link" onClick={onClose}>Writing</a></li>
      <li><a href="#speaking" className="nav-link" onClick={onClose}>Speaking</a></li>
      <li><a href="#contact" className="nav-link" onClick={onClose}>Contact</a></li>
    </ul>
  </div>
)

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="nav-logo">
              Kapil Viren Ahuja
            </Link>
            
            <ul className="nav-links">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#work" className="nav-link">Work</a></li>
              <li><a href="#writing" className="nav-link">Writing</a></li>
              <li><a href="#speaking" className="nav-link">Speaking</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>

            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}