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
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: '100%', height: 233 }} className={classes.footer}>
            <BottomNavigation
                // showLabels
                // value={value}
                // onChange={(event, newValue) => {
                //     setValue(newValue);
                /*}}*/
            >
                <div className={classes.footerInfo}>
                    <div className={classes.footerBoxes}>
                        <h3 className={classes.footerInfoText}>ADDRESS</h3>
                        <p className={classes.footerInfoText}>Nork-Marash</p>
                    </div>
                    <div className={classes.footerBoxes}>
                        <h3 className={classes.footerInfoText}>FOLLOW US VIA</h3>
                        <InstagramIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <FacebookIcon />
                    </div>
                    <div className={classes.footerBoxes}>
                        <h3 className={classes.footerInfoText}>DESCRIPTION</h3>
                        <p className={classes.footerInfoText}>What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text</p>
                    </div>
                </div>
                {/*<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />*/}
                {/*<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />*/}
                {/*<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />*/}
            </BottomNavigation>
        </Box>
    );
}
export default Footer