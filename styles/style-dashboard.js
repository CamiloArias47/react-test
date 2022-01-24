import css from 'styled-jsx/css'
import { GAP, MEDIAQUERY } from './theme'

export default css`

.utilities-bar{
    padding: .5rem 0;
}

.post-list{
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
}

@media (min-width: ${ MEDIAQUERY.minWidth }){
    .dashboard-content{
        width: ${ GAP.fromFrameDesk };
        margin : auto;
        min-height:60rem;
    }
    .post-list{
        grid-template-columns: 1fr 1fr 1fr;
    }
}
`