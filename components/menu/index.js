import { useRouter } from 'next/router'
import MenuLanding from './landing'
import MenuDashboard from './dashboard'

export default function Menu(){

    const router = useRouter()

    const isDashboard = router.pathname.indexOf('dashboard') > 0 ? true :false

    return isDashboard ? <MenuDashboard/> : <MenuLanding/>
}