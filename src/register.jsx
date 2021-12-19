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
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const theme = createTheme();
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const newDateUser = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password2: '',
    }

    const switchToRegister = () => {
        navigate('/login')
    }

    const userData = (e, type) => {
        switch (type) {
            case "firstname":
                newDateUser.firstname = e.target.value
                break;
            case "lastname":
                newDateUser.lastname = e.target.value
                break;
            case "email":
                newDateUser.email = e.target.value
                break;
            case "password":
                newDateUser.password = e.target.value
                break;
            case "password2":
                newDateUser.password2 = e.target.value
                break;
            default:
                break
        }
        console.log(data)
        console.log(newDateUser)
    }

    const singUp = () => {
        setData([newDateUser])
    }

    useEffect(() => {
        if (data.length > 0) {
            axios.post('http://localhost:8080/api/register', ...data).then(res => {
                console.log(res)
                navigate('/login')
            }).catch(err => {
                console.log(err)
            })
        }
    }, [data])

    const qwe = () => {
        console.log(data)
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
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onBlur={(e) => userData(e, "firstname")}
                                    autoComplete="given-name"
                                    name="firstname"
                                    required
                                    fullWidth
                                    id="firstname"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onBlur={(e) => userData(e, "lastname")}
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Last Name"
                                    name="lastname"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onBlur={(e) => userData(e, "email")}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onBlur={(e) => userData(e, "password")}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onBlur={(e) => userData(e, "password2")}
                                    required
                                    fullWidth
                                    name="password2"
                                    label="confirm-Password"
                                    type="password"
                                    id="password"
                                    autoComplete="password2"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            // type="submit"
                            fullWidth
                            onClick={singUp}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item onClick={switchToRegister}>
                                <Link href="#" variant="body2" onClick={qwe}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Register

