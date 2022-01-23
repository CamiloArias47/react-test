import style from './style'
import Slider from 'components/slider'

export default function SectionSlider(){
    return(
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
            <style jsx>{ style }</style>
        </section>
    )
}
