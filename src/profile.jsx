import React, {useEffect} from "react";
import axios from "axios";

const Profile = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/api/profile').then(res => {
            console.log(res)
        })
    }, [])

    return(
        <div>
            <p>hi welcome to you profile</p>
            <p>your profile id empty</p>
        </div>
    )
}

export default Profile