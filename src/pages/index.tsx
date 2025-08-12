import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/Navigation'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kapil Viren Ahuja - Senior Software Architect</title>
        <meta name="description" content="Senior Software Architect crafting scalable systems and leading technology teams to create exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="section" style={{ paddingTop: '8rem' }}>
          <div className="container">
            <div style={{ maxWidth: '800px' }}>
              <h1 className="hero-title" style={{ marginBottom: '2rem' }}>
                Building the future of software architecture, one system at a time.
              </h1>
              <p className="body-large" style={{ marginBottom: '3rem' }}>
                I'm Kapil Viren Ahuja, a Senior Software Architect with over a decade of experience 
                designing and implementing enterprise-scale systems that power millions of users worldwide.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#work" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
              <div>
                <h2 className="heading-2" style={{ marginBottom: '2rem' }}>About</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p className="body">
                    I specialize in transforming complex business challenges into scalable, elegant 
                    software solutions that drive real business value. My expertise spans cloud-native 
                    architectures, microservices design, and building high-performing engineering teams.
                  </p>
                  <p className="body">
                    Throughout my career, I've led the design and implementation of systems that handle 
                    massive scale while maintaining exceptional performance and reliability. I believe 
                    in the power of well-architected solutions to transform businesses and create 
                    meaningful impact.
                  </p>
                  <p className="body">
                    When I'm not architecting systems, you'll find me mentoring developers, speaking 
                    at conferences, and contributing to the open-source community.
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>Experience</h3>
                    <p className="small">10+ years in software architecture</p>
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>Projects</h3>
                    <p className="small">50+ enterprise systems delivered</p>
                  </div>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>Leadership</h3>
                    <p className="small">100+ developers mentored and led</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="section">
          <div className="container">
            <h2 className="heading-2" style={{ marginBottom: '3rem' }}>What I Do</h2>
            <div className="grid grid-3">
              <div className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>System Architecture</h3>
                <p className="body">
                  Design robust, scalable architectures that handle enterprise-level complexity 
                  while maintaining performance and reliability at scale.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>Cloud Solutions</h3>
                <p className="body">
                  Build cloud-native applications using modern platforms, optimizing for 
                  performance, security, and cost-effectiveness.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>Team Leadership</h3>
                <p className="body">
                  Lead high-performing engineering teams through complex projects, fostering 
                  a culture of technical excellence and continuous learning.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>Microservices</h3>
                <p className="body">
                  Design and implement microservices architectures that enable teams to work 
                  independently while maintaining system coherence.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>Performance Optimization</h3>
                <p className="body">
                  Analyze and optimize system performance, ensuring applications handle 
                  high traffic loads while maintaining exceptional user experiences.
                </p>
              </div>
              <div className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>DevOps & CI/CD</h3>
                <p className="body">
                  Implement robust DevOps practices and CI/CD pipelines that enable rapid, 
                  reliable deployments while maintaining system stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Section */}
        <section id="writing" className="section" style={{ backgroundColor: 'var(--color-gray-50)' }}>
          <div className="container">
            <h2 className="heading-2" style={{ marginBottom: '3rem' }}>Writing</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <article className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  The Evolution of Microservices Architecture
                </h3>
                <p className="body" style={{ marginBottom: '1rem' }}>
                  Exploring how microservices have evolved from simple service decomposition to 
                  complex distributed systems, and what the future holds for this architectural pattern.
                </p>
                <p className="small">March 15, 2024 • 8 min read</p>
              </article>
              <article className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  Building Resilient Systems in the Cloud Era
                </h3>
                <p className="body" style={{ marginBottom: '1rem' }}>
                  Best practices for designing fault-tolerant applications that can withstand failures 
                  and maintain high availability in cloud environments.
                </p>
                <p className="small">February 28, 2024 • 12 min read</p>
              </article>
              <article className="card">
                <h3 className="heading-3" style={{ marginBottom: '1rem' }}>
                  The Developer Experience Revolution
                </h3>
                <p className="body" style={{ marginBottom: '1rem' }}>
                  How investing in developer tooling and experience can dramatically improve team 
                  velocity, code quality, and overall engineering satisfaction.
                </p>
                <p className="small">January 10, 2024 • 6 min read</p>
              </article>
            </div>
          </div>
        </section>

        {/* Speaking Section */}
        <section id="speaking" className="section">
          <div className="container">
            <h2 className="heading-2" style={{ marginBottom: '3rem' }}>Speaking</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>TechConf 2024 - Keynote</h3>
                    <p className="body" style={{ marginBottom: '0.5rem' }}>
                      "Scaling Engineering Excellence: From Startup to Enterprise"
                    </p>
                    <p className="small">
                      A deep dive into building and scaling engineering organizations that adapt to rapid growth.
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="small" style={{ fontWeight: 600 }}>June 15, 2024</p>
                    <p className="small">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h3 className="heading-3" style={{ marginBottom: '0.5rem' }}>Cloud Architecture Summit</h3>
                    <p className="body" style={{ marginBottom: '0.5rem' }}>
                      Panel: "The Future of Serverless Computing"
                    </p>
                    <p className="small">
                      Exploring the evolution of serverless architectures and their impact on modern development.
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="small" style={{ fontWeight: 600 }}>May 8, 2024</p>
                    <p className="small">Austin, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ backgroundColor: 'var(--color-gray-900)', color: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="heading-2" style={{ marginBottom: '2rem', color: 'var(--color-white)' }}>
                Let's Build Something Amazing Together
              </h2>
              <p className="body-large" style={{ marginBottom: '3rem', color: 'var(--color-gray-300)' }}>
                Ready to transform your software architecture? Let's discuss how we can create 
                scalable, innovative solutions that drive your business forward.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="mailto:contact@kapilvirenahuja.com" 
                  className="btn btn-primary"
                  style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)' }}
                >
                  Send Message
                </a>
                <a 
                  href="https://linkedin.com/in/kapilvirenahuja" 
                  className="btn btn-ghost"
                  style={{ color: 'var(--color-white)', borderColor: 'var(--color-gray-600)' }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: 'var(--color-gray-900)', padding: '2rem 0', borderTop: '1px solid var(--color-gray-800)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--color-gray-400)' }} className="small">
            © 2024 Kapil Viren Ahuja. Architecting the future, one system at a time.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home