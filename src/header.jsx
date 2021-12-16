import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from "./styles"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const classes = useStyles()
    const navigate = useNavigate()

    const switchToHome = () => {
        navigate('/')
    }
    const switchToLogin = () => {
        navigate('/login')
    }
    const switchToRegister = () => {
        navigate('/register')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" onClick={switchToHome} component="div" sx={{ flexGrow: 1 }}>
                        MERCEDES BENZ
                    </Typography>
                    <Button color="inherit" onClick={switchToRegister} >Register</Button>
                    <Button color="inherit" onClick={switchToLogin}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header