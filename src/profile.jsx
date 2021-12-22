import React, {useEffect} from "react";
import axios from "axios";
import useStyles from "./styles"


const Profile = () => {
    const classes = useStyles()
    useEffect(() => {
        axios.get('http://localhost:8080/api/profile', {headers: {
            Authorization: localStorage.getItem('token')
        }}).then(res => {
            console.log(res.data.name)
        })
    }, [])

    return(
        <div>
            <p className={classes.userProfileText}>Hi welcome to you profile</p>
            <p className={classes.userProfileText}>your profile id empty</p>
        </div>
    )
}

export default Profile