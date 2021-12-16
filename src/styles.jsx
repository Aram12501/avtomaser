import React from 'react'
import { makeStyles } from '@mui/styles';
import BackgroundImg from './img/157-1575708_big.jpg'
const useStyles = makeStyles({
    homePage : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundPosition: '50% -170px',
        backgroundSize: '1500px',
        paddingTop: '280px',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${BackgroundImg})`
    },
    homePageText : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        letterSpacing: 1.3,
        lineHeight: 1.3,
    },
    footer : {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3677d2",
    },
    footerInfo : {
        width: '1000px',
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#3677d2",
        justifyContent: "space-between"
    },
    footerBoxes : {
        width: 150,
        textAlign: "center",
        backgroundColor: "#3677d2"
    },
    footerInfoText : {
        color: "white",
    },
    footerIcons : {
        color: "white",
        marginLeft: 4
    },
});

export default useStyles