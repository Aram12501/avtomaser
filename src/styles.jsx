import React from 'react'
import { makeStyles } from '@mui/styles';
import BackgroundImg from './img/157-1575708_big.jpg'
const useStyles = makeStyles({
    homePageBackgroundImg : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: '50% -170px',
        backgroundSize: '1500px',
        paddingTop: '15%',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${BackgroundImg})`
    },
    homePageText : {
        display: "flex",
        alignItems: "center",
        textAlign: "center",
    },
    footer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3677d2",
    },
    footerInfo : {
        width: '1000px',
        backgroundColor: "#3677d2",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    footerBoxes : {
        backgroundColor: "#3677d2",
        width: 150,
        textAlign: "center"
    },
    footerInfoText : {
        color: "white",
    }
});

export default useStyles