import React from "react"
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import Login from "./login";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Register from "./register";
import useStyles from "./styles";
import Profile from "./profile";
import Context from './context'
import UserProvider from './context'

const Dashboard = () => {
    const classes = useStyles()
    return (
        <Context.Provider value={authInitial}>
            <Router>
                <div>
                    <Header />
                        <Routes>
                            <Route index element={<Home />}>
                            </Route>
                            <Route path="/register" element={<Register />}>
                            </Route>
                            <Route path="/login" element={<Login />}>
                            </Route>
                            <Route path="/profile" element={<Profile />}>
                            </Route>
                        </Routes>
                        <Footer />
                    </div>
            </Router>
        </Context.Provider>
    )
}

export default Dashboard