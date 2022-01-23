import css from 'styled-jsx/css'
import { GAP, MEDIAQUERY } from 'styles/theme'

export default css`
.welcome-section{
    background-image : url('/images/background/Imagen_AI-1.png');
    width: 100%;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    background-position-y: top;
}

.welcome-text{
    padding: 8rem ${ GAP.fromWindowMobile } 6rem;
}

.welcome-text h1{
    font-size: 2rem;
    font-weight : 300;
    margin-bottom:1rem;
}

.welcome-text h1 span{
    display:block;
    padding-bottom: 0.5rem;
}

.fw9{
    font-weight : 700;
    display: inline-block !important;
}

@media (min-width: ${MEDIAQUERY.minWidth} ){
    .welcome-section{
        background-position: right;
    }

    .welcome-text{
        width: ${ GAP.fromFrameDesk };
        margin: auto;
        padding-bottom: 12rem;
        padding-top: 12rem;
    }

    .welcome-text h1{
        font-size: 3rem;
    }
}

`