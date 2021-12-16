import React, {useEffect, useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useStyles from "./styles";
import axios from "axios";

const Register = () => {
    const theme = createTheme();
    const [data, setData] = useState([])
    const newDateUser =  {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const userData = (e, type) => {
        // console.log(const value = e.target.value)
        const value = e.target.value
        switch (type) {
            case "firstName":
                newDateUser.firstName = (e.target.value)
                console.log(e.target.value)
                break;
            case "lastName":
                newDateUser.lastName = (e.target.value)
                break;
            case "email":
                newDateUser.email = (e.target.value)
                break;
            case "password":
                newDateUser.password = (e.target.value)
                break;
            case "confirmPassword":
                newDateUser.confirmPassword = (e.target.value)
                break;
            default:
                break
        }
        console.log(data)
        console.log(newDateUser)
    }

    const singUp = () => {
        setData([...data, newDateUser])
        console.log(newDateUser)
        console.log(data)
    }

    const qwe = () => {
        console.log(data)
    }

    useEffect(() => {
        if (data) {
            axios.post('http://localhost:8080/api/register', {...data}).then(res => {
                    console.log(res)
                }
            )
        }
    }, [data]);

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
                                    onBlur={(e) => userData(e, "firstName")}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onBlur={(e) => userData(e, "lastName")}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
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
                                    onBlur={(e) => userData(e, "confirmPassword")}
                                    required
                                    fullWidth
                                    name="confirm-password"
                                    label="confirm-Password"
                                    type="password"
                                    id="password"
                                    autoComplete="confirm-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
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
                            <Grid item>
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

