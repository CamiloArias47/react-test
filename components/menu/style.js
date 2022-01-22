import css from 'styled-jsx/css'
import { GAP, MEDIAQUERY, COLOR } from 'styles/theme'

export default css`

nav{
    position:fixed;
    width: 100%;
    padding : 2rem 0;
    max-height: 10rem;
    z-index: 10;
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
}
`