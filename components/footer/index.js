import Image from 'next/image'
import logoFooter from 'public/images/logos/logoFooter.svg'
import style from './style'

export default function Footer(){
    return(
        <footer>
            <Image
            src={ logoFooter }
            alt="Logo footer"
            />
            <style jsx>{ style }</style>
        </footer>
    )
}