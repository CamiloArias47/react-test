import Image from 'next/image'
import world from 'public/images/background/Imagen_AI-1.png'
import welcomeName from 'public/images/logos/name-welcome.svg'
import americaPromo from 'public/images/promo/imageBig.png'
import instagramIcon from "public/images/logos/instagram.svg";
import logoFooter from 'public/images/logos/logoFooter.svg'
import Slider from 'components/slider'
import style from 'styles/style-landing'

const bgWorld = { backgroundImage: `url('${world}')` }

export default function Home() {
  return (
    <main>
      <section className='welcome-section' >
        <div className='welcome-text'>
          <h1>
            <span >Bienvenido a tu </span>
            <span>
              <span className='fw9'>Entrevista Técnica</span> en
            </span>
          </h1>
          <Image 
            src={welcomeName}
            alt="logo welcome"
          />
        </div>
      </section>

      <section className='gradient-section'>
        <div className='gradient-bgimage'>
            <div className='wraper-gradient'>
              <div className='gradient-image'>
                <Image 
                  src={ americaPromo }
                  alt="landing page ejemplo"
                />
              </div>
              <div className='gradient-text'>
                <h1>
                  <span>Trabajamos para</span>
                  <span>
                    <span className='fw7'>Convertir Ideas</span> en &nbsp; 
                    <span className='fw7'>productos.</span>
                  </span>
                </h1>
              </div>
            </div>
        </div> 
      </section>

      <section className='slider-section'>
        <div className='wraper-slider'>
            <div className='slider-text'>
              <h1>
                <span>Entre los <span className='profits'>beneficios</span> que</span>
                <span>
                  <span className='give'>ofrecemos</span> se encuentran
                </span>
              </h1>
            </div>
            <Slider />
        </div>
      </section>

      <section className='instagram-section'>
        <h1>
          <span>
            Gracias por&nbsp;
            <span className="destacado">completar el ejercicio </span>
          </span>
          <span className='dim-text'>Te invitamos a ver más información</span>
        </h1>
        <div className='instagran-link-container'>
          <a href="https://www.instagram.com/waconomads/" target="_blank" rel="noreferrer">
            <Image src={instagramIcon} alt="Intagram Icon"/>
          </a>
          <a className='btn-more' href="https://wacoservices.com/" target="_blank" rel="noreferrer">
            Conocer más
          </a>
        </div>
      </section>

      <footer>
        <Image
          src={ logoFooter }
          alt="Logo footer"
        />
      </footer>

      <style jsx>{ style }</style>
    </main>
  )
}
