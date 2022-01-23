import css from 'styled-jsx/css'
import { COLOR } from 'styles/theme'

export default css`
.wraper-slider{
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
}

.slider-text{
    text-align: center;
    width: 70%;
    margin: auto;
}

.slider-text h1{
    font-weight:300;
    font-size:2rem;
}

.slider-text h1 span{
    display: block;
}

.slider-text h1 .profits{
    display: inline-block;
    background: ${ COLOR.gradientInvert };
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    color: black;
    font-weight: 900;
}

.slider-text h1 .give{
    display: inline-block;
    font-weight: 900;
}

`