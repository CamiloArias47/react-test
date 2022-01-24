import css from 'styled-jsx/css'
import { COLOR, MEDIAQUERY } from 'styles/theme'

export default css`
.modal-block{
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 0;
    right: 0;
    left:0;
    bottom: 0;
    width:100%;
    z-index: 20;
    background: ${ COLOR.dimLine };
}

.modal-frame{
    width: 95%;
    padding: 1rem;
    border-radius: 15px;
    background: ${ COLOR.dark };
    position:relative;
    z-index:1;
    color: ${ COLOR.white };
}

.close-btn{
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    width: 32px;
    height: 32px;
}

@media (min-width: ${MEDIAQUERY.minWidth} ){
    .modal-frame{
        width: 50%;
    }
}

@media (min-width: ${MEDIAQUERY.mediumWidth} ){
    .modal-frame{
        width: 35%;
    }
}

`