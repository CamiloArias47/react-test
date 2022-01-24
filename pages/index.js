import { useEffect } from 'react';
import { authChanged } from 'firebaseconf/auth/auth-state'
import { useUI } from 'context/UIcontext';
import useNearScreen  from 'hooks/useNeearScreen'
import SectionWelcome from 'components/section-welcome'
import SectionGradient from 'components/section-gradient'
import SectionSlider from 'components/section-slider'
import SectionInstagram from 'components/section-instagram'
import Footer from 'components/footer';

export default function Home() {

  const { loginSuccess, setNavBG, navWithBg } = useUI()
  const {isNearScreen, fromRef} = useNearScreen ({ distance: '5px', once : false })

  useEffect( () => {
    authChanged(loginSuccess)
  }, [])

  useEffect( () => {
    setNavBG(!navWithBg)
  },[isNearScreen])


  return (
    <main >
      <div ref={ fromRef }></div>
      <SectionWelcome />
      <SectionGradient />
      <SectionSlider />
      <SectionInstagram />
      <Footer />
    </main>
  )
}
