import css from 'styled-jsx/css'
import { COLOR } from './theme'

export default css`
.modal-content{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.title{
    font-size:2rem;
}
form{
    display: flex;
    flex-direction: column;
    width:100%;
}
form input,
form textarea{
    width: 100%;
    margin-bottom: 0.5rem;
    padding: 1rem;
    font-size: 1.5rem;
    border: none;
    border-bottom: 3px solid ${ COLOR.green };
    background : ${ COLOR.dark };
    color: ${ COLOR.white };
}
form input:focus-visible,
form textarea:focus-visible{
    outline : none;
}

.btn-primary{
    width: 100%;
    text-align: center;
    margin-top : 2rem;
    padding: 0.5rem;
    font-size: 2rem;
    background : ${ COLOR.gradientInvert };
    border: none;
    border-radius: 10px;
    color: white;
    box-shadow: 0px 0px 5px 2px rgb(1 255 47 / 50%);
}

.modal-footer{
    padding-top : 2rem;
    width:100%;
    display:flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.btn-google{
    background-color: ${ COLOR.white };
    border: 2px solid ${ COLOR.green };
    width: 47px;
    height: 47px;
    border-radius: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:1rem;
}
.modal-footer-bootom{
    width: 115%;
    border-top: 1px solid ${ COLOR.line };
    margin-top: 2rem;
    padding-top: 1rem;
}
`