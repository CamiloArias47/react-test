import css from 'styled-jsx/css'
import { COLOR, GAP, MEDIAQUERY } from './theme'

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


/** Gradient section */

.gradient-section{
    background: ${COLOR.gradientInvert};
    transform: skew(0deg, 358deg);
    width: 100%;
}

.gradient-bgimage{
    background-image : url('/images/background/bg-gradient.svg'),
                       url('/images/background/bg-gradient-right.svg');
    background-repeat: no-repeat;
    background-position-x: -5vh, right;
    background-position-y: center;
}

.wraper-gradient{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    transform: skew(0deg, 2deg);
}

.wraper-gradient .gradient-image{
    position: relative;
    top: -4.5rem;
}

.wraper-gradient img{
    width: 100%;
}

.wraper-gradient div{
    width: 100%;
}

.wraper-gradient .gradient-text{
    text-align: center;
    color: ${ COLOR.dark };
    position: relative;
    top: -2.3rem;
}

.wraper-gradient .gradient-text h1{
    font-size: 2rem;
    font-weight: 300;
}

.wraper-gradient .gradient-text h1 span{
    display:block;
}

.fw7{
    display:inline-block !important;
    font-weight: 700;
}

@media (min-width: ${MEDIAQUERY.minWidth} ){
    .gradient-section{
        height: auto;
    }

    .wraper-gradient{
        flex-direction: row;
        padding: 0 2rem;
        width: ${ GAP.fromFrameDesk };
    }

    .wraper-gradient div{
        width: 50%;
    }

    .wraper-gradient .gradient-image{
        top: -1.8rem;
    }

    .wraper-gradient .gradient-text{
        text-align: right;
        position: inherit;
    }
    
    .wraper-gradient .gradient-text h1{
        font-size: 3rem;
    }
    
}
`