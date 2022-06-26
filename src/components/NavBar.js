import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import logo from '../logo2.png';
import HomeIcon from '@mui/icons-material/Home';
import FitbitIcon from '@mui/icons-material/Fitbit';


const NavBar = () => {
    return ( 

    <Stack className='nav' sx={{gap:{sm:"122px"}}} direction="row" justifyContent="none" alignItems="center" style={{fontFamily:"'Montserrat', sans-serif",fontWeight:"bold"}}>

        <Link to='/'><img src={logo} alt='logo'style={{width:"180px",height:"150px", margin:"10px 20px"}}/></Link>
        
        <Stack direction="row" gap='80px' fontSize='13px' alignItems="flex-end">
          

          <Link to='/' style={{textDecoration:"none",color:"#323233"}}>
          <Stack direction='column' justifyContent="center" alignItems="center" gap='8px'>
            <HomeIcon/>
            <Link to='/' style={{textDecoration:"none",color:"#323233",borderBottom:"3px solid #4C9A9A"}}>Home</Link>
          </Stack>
          </Link>

          <a href='#exercises' style={{textDecoration:"none",color:"#323233"}}>
          <Stack sx={{marginRight:{sm:"50px"},marginRight:{xs:"50px"}}} direction='column' justifyContent="center" alignItems="center" gap='8px'>
            <FitbitIcon/>
            <a href='#exercises' style={{textDecoration:"none",color:"#323233"}}>Exercises</a>
          </Stack>
          </a>
             
        </Stack>

    </Stack>

    );
}
 
export default NavBar;