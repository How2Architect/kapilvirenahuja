import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import WritingSection from '@/components/WritingSection'
import SpeakingSection from '@/components/SpeakingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

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
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <WritingSection />
        <SpeakingSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default Home