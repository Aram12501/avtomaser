import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import useStyles from "./styles";

const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <div>
                <div className={classes.footerInfo}>
                    <div className={classes.footerBoxes}>
                        <h3 className={classes.footerInfoText}>ADDRESS</h3>
                        <p className={classes.footerInfoText}>Nork-Marash</p>
                    </div>
                    <div className={classes.footerBoxes}>
                        <h3 className={classes.footerInfoText}>FOLLOW US VIA</h3>
                        <InstagramIcon className={classes.footerIcons} />
                        <LinkedInIcon className={classes.footerIcons} />
                        <TwitterIcon className={classes.footerIcons} />
                        <FacebookIcon className={classes.footerIcons} />
                    </div>
                    <div className={classes.footerBoxes}>
                        <h3 className={classes.footerInfoText}>DESCRIPTION</h3>
                        <p className={classes.footerInfoText}>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer