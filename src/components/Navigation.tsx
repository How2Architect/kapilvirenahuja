import { useState, useEffect } from 'react'

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
            <a href="#" className="nav-logo">
              Kapil Viren Ahuja
            </a>
            
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

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          <li><a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#work" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Work</a></li>
          <li><a href="#writing" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Writing</a></li>
          <li><a href="#speaking" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Speaking</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </>
  )
}