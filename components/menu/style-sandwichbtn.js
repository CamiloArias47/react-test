import css from 'styled-jsx/css'
import { COLOR, MEDIAQUERY } from 'styles/theme'

export default css`
    .sandwich-btn{
        display: flex;
        flex-direction: column;
        width: 7vh;
        height: 5.5vh;
        justify-content: space-around;
    }

    .sandwich-btn div{
        width: 100%;
        height: 0.8vh;
        background: ${COLOR.gradient};
        border-radius: 5rem;
        
    }

    @media (min-width: ${MEDIAQUERY.minWidth} ){
        .sandwich-btn{
            display: none;
        }
    }
`