import { Stack, Typography } from '@mui/material';
import React from 'react';
import logo from '../logo2.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from 'react-router-dom'


const Footer = () => {
    return ( 

        <Stack style={{width:"100%",backgroundColor:"whitesmoke",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",marginTop:"20px",padding:"25px",color:"#0A0A0A",fontFamily:"Roboto"}}>
            <Stack style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
                <Stack style={{borderRight:"1px solid gray"}}>
                    <img style={{width:"170px",height:"150px"}} src={logo}/>
                </Stack>

                <Stack style={{borderRight:"1px solid gray",paddingRight:"40px"}}>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>WEEKLY PLANS</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>DAILY PLANS</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>YEARLY PLANS</Typography>
                </Stack>

                 <Stack style={{borderRight:"1px solid gray",paddingRight:"40px"}}>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>EQUIPMENTS</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>TRAINERS</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>ONLINE GUIDE</Typography>
                </Stack>

                 <Stack style={{borderRight:"1px solid gray",paddingRight:"40px"}}>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>SERVICES</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>DELIVERIES</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>HEALTHY FOODS</Typography>     
                </Stack>

                <Stack style={{paddingRight:"40px"}}>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>ABOUT US</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>CONTACT US</Typography>
                    <Typography style={{fontWeight:"bold",fontSize:"14px"}}>RESOURCES</Typography>
                </Stack>
            </Stack>

            <Stack style={{color:"#0A0A0A",textDecoration:"none",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
               <Link to="www.linkedin.com"><LinkedInIcon style={{color:"#0A0A0A",marginRight:"15px",fontSize:"30px"}}/></Link>
               <Link to="www.instagram.com"><InstagramIcon style={{color:"#0A0A0A",marginRight:"15px",fontSize:"30px"}}/></Link>
               <Link to="www.facebook.com"><FacebookIcon style={{color:"#0A0A0A",marginRight:"15px",fontSize:"30px"}}/></Link> 
            </Stack>

            <Stack style={{justifyContent:"center",alignItems:"center",marginRight:"15px"}}><p style={{fontSize:"12px"}}>&copy;All Rights Reserved</p></Stack>
            
        </Stack>
     );
}
 
export default Footer;