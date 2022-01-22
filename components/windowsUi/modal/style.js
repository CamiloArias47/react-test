import css from 'styled-jsx/css'
import { COLOR } from 'styles/theme'

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
    width: 50%;
    padding: 1rem;
    border-radius: 5rem;
    background: ${ COLOR.dark };
}

`