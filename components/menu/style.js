import css from 'styled-jsx/css'
import { GAP, MEDIAQUERY, COLOR } from 'styles/theme'

export default css`

nav{
    position:fixed;
    width: 100%;
    padding : 2rem 0;
    max-height: 10rem;
}

.wraper-nav{
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}

ul.desktop-menu{
    display:none
}


@media (min-width: ${MEDIAQUERY.minWidth} ){
    nav{

    }
    ul.desktop-menu{
        display: flex;
        align-items: center;
    }
    
    ul li{
        padding : .5rem;
    }
    
    ul li a{
        color : ${ COLOR.white };
    }
    
    .btn-shine{
        border-radius: 5rem;
        position: relative;
        background: #0e0e0e;
        padding: 0.2rem 1rem;
        display: flex;
        align-items: center;
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