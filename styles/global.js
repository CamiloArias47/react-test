import css from 'styled-jsx/css'
import { COLOR, GAP } from './theme'

export const globalStyles = css.global`

    body{
        background : ${COLOR.dark};
        position: relative;
    }

    .dashboard-content{
        padding-top:1rem;
    }

    .btn-shine{
        border: none;
        color: white;
        border-radius: 5rem;
        position: relative;
        background: #0e0e0e;
        padding: 0.2rem 1rem;
        display: flex;
        align-items: center;
        justify-content : center;
    }
    
    .btn-shine::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -2px;
        border-radius: inherit;
        background: ${ COLOR.gradient };
        box-shadow: 0px 0px 5px 2px rgb(1 255 47 / 50%);
    }
}

`