import Image from 'next/image'
import americaPromo from 'public/images/promo/imageBig.png'
import style from './style'

export default function SectionGradient(){
    return(
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

            <style jsx>{ style }</style>
        </section>
    )
}