import { Stack } from '@mui/material';
import React, { useState } from 'react';



const CategoryCard = ({cata,setSearch}) => {

    return ( 

        <div >
            <Stack onClick={() => setSearch(cata)} className='card' sx={{marginTop:{xs:"40px",sm:"50px"},marginBottom:{xs:"40px",sm:"50px"},marginRight:{xs:"20px",sm:"80px",lg:"200px"}}} style={{width:"220px",height:"220px",backgroundColor:"#76A1BA",borderRadius:"5%",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 30px"}}>
                <h4 style={{fontSize:"20px",fontFamily:"Roboto",marginTop:"-8px",color:"white"}}>{cata.toUpperCase()}</h4>
                <div style={{color:"white",textAlign:"center",fontSize:"12px",fontFamily:"Roboto"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </Stack>
        </div>


     );
}
 
export default CategoryCard;