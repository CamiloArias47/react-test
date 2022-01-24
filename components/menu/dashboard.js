import { useUI } from 'context/UIcontext'
import DashboardThemeProvider from 'components/dashboard-container'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box';
import logoMenu from 'public/images/logos/logo-menu.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import style from './style-dashboard'

const desing = {  
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    width:'100%',
    padding: '.5rem 0'
}

const desing2 = {
     display: 'flex', 
     flexDirection: 'row',
     alignItems: 'center'
}


export default function MenuDashboard(){

    const { uName } = useUI()


    return(
        <DashboardThemeProvider>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={ desing }>
                        <Box >
                            <Link href="/dashboard">
                                <a>
                                <Image src={logoMenu} alt="logo menu"/>
                                </a>
                            </Link>
                        </Box>
                        <Box sx={desing2}>
                            <div className='user'>
                                {uName}
                            </div>
                            <a>Salir</a>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <style jsx>{ style }</style>
        </DashboardThemeProvider>
    )
}


