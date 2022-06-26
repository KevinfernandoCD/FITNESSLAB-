import React, { useState } from 'react';
import {Box,Stack,Typography} from '@mui/material';


const HeroBanner = () => {

    return ( 

    <Box style={{display:"flex"}} sx={{mt:{lg:"220px",sm:"100px",xs:"70px"},ml:{lg:"40px",sm:"40px",xs:"40px"},flexDirection:{xs:"column",sm:"column",lg:"row"},justifyContent:{xs:"center",sm:"center",lg:"space-between"},alignItems:{xs:"center",sm:"center",lg:"center"}}}>
         <Stack   sx={{justifyContent:{xs:"flex-start",sm:"center",lg:"center"}}}>
            <Typography className="hero-banner" sx={{fontSize:{lg:"80px",sm:"50px",xs:"40px"}}} style={{fontWeight:"bold",fontSize:"80px",color:"#323233"}}>
                Stay Fit And Healthy.
            </Typography>
            <Typography className="hero-banner" style={{color:"gray"}} sx={{textAlign:{sm:"center",lg:"left"},fontSize:{sm:"20px",sm:"25px"}}}>
                Checkout The Most Effective Exercises Below
            </Typography>
            <Typography className="hero-banner" style={{fontSize:"12px",color:"gray",marginTop:"20px"}} sx={{textAlign:{sm:"center",lg:"left"},width:{xs:"300px",sm:"700px",lg:"700px"}}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Stack sx={{marginLeft:{sm:"280px",lg:"0px"}}}>
             <button className='explore'><a href='#exercises'>Explore Exercises</a></button>
            </Stack>     
        </Stack>
        <Stack className='image' sx={{display:{xs:"none",sm:"none",lg:"block"}}}>
            <img style={{width:"600px",height:"900px",borderBottomLeftRadius:"30%",boxShadow:"5px 10px 8px 10px #888888",position:"absolute",top:"0",left:"1000px"}} src="https://images.unsplash.com/photo-1572459815294-26edc555608e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80"/>
        </Stack>
         <Stack  className='image' sx={{display:{xs:"block",sm:"block",lg:"none"},width:{sm:"50%"},height:{sm:"500px"}}}>
            <img style={{width:"100%",height:"550px",marginTop:"40px",borderBottomLeftRadius:"20%"}} src="https://images.unsplash.com/photo-1572459815294-26edc555608e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80"/>
        </Stack>
    </Box>

    );

}
 
export default HeroBanner;