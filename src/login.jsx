import React, {useEffect, useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Login = () => {
    const theme = createTheme();
    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const userData = {
        email: '',
        password: '',
    }

    const getUserData = (e, type) => {
        switch (type) {
            case "email":
                userData.email = e.target.value
                break;
            case "password":
                userData.password = e.target.value
                break;
            default:
                break
        }
    }
    const login = () => {
        setUser([userData])
        console.log(user)
        // setUser([userData])
    }
    useEffect(() => {
        if (user.length > 0) {
            axios.post('http://localhost:8080/api/login', ...user).then(res => {
                console.log(res)
                navigate('/profile')
            }).catch(err => {
                console.log(err)
            })
        }
    }, [user])
    const switchToLogin = () => {
        console.log(user)
        // navigate('/register')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            onBlur={(e) => getUserData(e, 'email')}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onBlur={(e) => getUserData(e, 'password')}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            // type="submit"
                            fullWidth
                            onClick={login}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item onClick={switchToLogin}>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login