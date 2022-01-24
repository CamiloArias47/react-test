import { useState } from 'react'
import { useUI } from 'context/UIcontext'
import { logout } from 'firebaseconf/auth/logout'
import Image from 'next/image'
import DashboardThemeProvider from 'components/dashboard-container'
import Link from 'next/link'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import logoMenu from 'public/images/logos/logo-menu.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { uName, exitSession, avtr } = useUI()

    const handlerLogout = ()=>{
        logout().then( exitSession() )
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            <Button variant='text' color='info'>
                                <Link href="/dashboard/allpost">
                                    <a>Todos los Post</a>
                                </Link>
                            </Button>
                            <div className='user'>
                                
                                <Avatar alt={uName} src={avtr} 
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                />
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href="/dashboard">
                                            <a>Mis Post</a>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handlerLogout}>Salir</MenuItem>
                                </Menu>
                            </div>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <style jsx>{ style }</style>
        </DashboardThemeProvider>
    )
}


