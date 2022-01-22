import css from 'styled-jsx/css'
import { COLOR, GAP, MEDIAQUERY } from 'styles/theme'

export default css`

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