import css from 'styled-jsx/css'
import { COLOR } from 'styles/theme'

export default css`
.slider{
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
}

.btn-shine{
    padding: 0;
    border:none;
}

.btn-shine :global(svg){
    color : ${ COLOR.white };
}

.btn-shine :global(svg.to-right){
    transform: rotate(0.5turn);
}

.visible-area-slides{
    width: 80%;
    padding: 0 .5rem;
    display: flex;
    overflow-x: scroll;
}

.visible-area-slides::-webkit-scrollbar {
  display: none;
}

.dots{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
}
`

export const dotStyle = css`
    button{ 
        border:none;
        border-radius: 5rem;
        width: 1rem;
        height: 1rem;
        background : linear-gradient(92deg, #00ff6838 30%, #00e6e330 100%);
        margin: 0 .6rem;
    }
    
    .active{
        background : ${ COLOR.gradientInvert };
    }
`