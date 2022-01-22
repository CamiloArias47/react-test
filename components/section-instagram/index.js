import Image from 'next/image'
import instagramIcon from "public/images/logos/instagram.svg";
import style from './style'

export default function SectionInstagram(){
    return(
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

            <style jsx>{ style }</style>
        </section>
    )
}