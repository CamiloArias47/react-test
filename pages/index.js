import { useEffect } from 'react';
import { authChanged } from 'firebaseconf/auth/auth-state'
import { useUI } from 'context/UIcontext';
import SectionWelcome from 'components/section-welcome'
import SectionGradient from 'components/section-gradient'
import SectionSlider from 'components/section-slider'
import SectionInstagram from 'components/section-instagram'
import Footer from 'components/footer';

export default function Home() {

  const { loginSuccess } = useUI()

  useEffect( () => {
    authChanged(loginSuccess)
  }, [])

  return (
    <main>
      <SectionWelcome />
      <SectionGradient />
      <SectionSlider />
      <SectionInstagram />
      <Footer />
    </main>
  )
}
