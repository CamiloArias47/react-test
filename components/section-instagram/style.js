import css from 'styled-jsx/css'
import { COLOR, MEDIAQUERY } from 'styles/theme'

export default css`
.instagram-section{
    background-image: url('/images/background/bg-instagram-mobile.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;
    background-size: 135%;
    text-align: center;
    padding: 7rem 0;
}
.instagram-section h1{ 
    font-size: 2rem;
    font-weight: 300;
}
.instagram-section h1 .destacado{
    display : block;
    font-weight: 700;
    background : ${ COLOR.gradientInvert };
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.instagram-section h1 .dim-text{
    display:block;
    font-size: 1.3rem;
    padding-top: 1.2rem;
}

.instagram-section .btn-more{
    color: #0E0E0E;
    background : ${ COLOR.gradientInvert };
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1rem 3.3rem;
    border-radius: 5rem;
    margin-left: 1.5rem;
}

.instagram-section .btn-more:hover{
    box-shadow: 0px 0px 11px 5px rgb(1 255 47 / 50%);
}

.instagram-section .instagran-link-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:2rem;
}

@media (min-width: ${MEDIAQUERY.minWidth} ){
    .instagram-section{ 
        background-image: url('/images/background/bg-instagran.svg');
        background-repeat: no-repeat;
        background-size: 110%;
        background-position-y: center;
        background-position-x: center;
        text-align: center;
        padding: 7rem 0;
    }
    .instagram-section h1 .destacado{
        display: inherit;
    }
    .instagram-section h1 .dim-text{
        padding-top: 0.8rem;
        font-size: 1.7rem;
    }

    .instagram-section .instagran-link-container{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top:1rem;
    }
}

`