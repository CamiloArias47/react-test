import SectionWelcome from 'components/section-welcome'
import SectionGradient from 'components/section-gradient'
import SectionSlider from 'components/section-slider'
import SectionInstagram from 'components/section-instagram'
import Footer from 'components/footer';


export default function Home() {
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
