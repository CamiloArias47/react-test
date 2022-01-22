import css from 'styled-jsx/css'

import { MEDIAQUERY } from 'styles/theme'

export default css`
.slide-item{
    min-width: 160px;
    transition: transform 1s ease;
}

.slide-image-item{
    text-align:center;
}

.slide-item-text{
    text-align: center;
    padding-top: 1rem;
    font-weight: 400;
    width: 60%;
    margin: auto;
}

.slide-desk{
    display : none;
}

@media (min-width: ${ MEDIAQUERY.minWidth }){
    .slide-item{
        min-width: 210px;
    }

    .slide-desk{
        display : block;
    }
}
`