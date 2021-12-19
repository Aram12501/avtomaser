import React from "react"
import Header from "./header";
import Home from "./home";
import Footer from "./footer";
import Login from "./login";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Register from "./register";
import useStyles from "./styles";
import Profile from "./profile";

const Dashboard = () => {
    const classes = useStyles()
    return(
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
    )
}

export default Dashboard