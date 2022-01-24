import Image from 'next/image'
import welcomeName from 'public/images/logos/name-welcome.svg'
import style from './style'

export default function SectionWelcome(){
    return(
        <section className='welcome-section' id="welcome">
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

        <style jsx>{ style }</style>
      </section>
    )
}