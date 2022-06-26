import { Stack } from '@mui/material';
import React from 'react';
import {useNavigate,Link} from 'react-router-dom';

const Card = ({data}) => {

    console.log(data)
    return ( 

    <Link to={`/exercise/${data.id}`} style={{width:"320px",height:"460px",backgroundColor:"whitesmoke",margin:"20px 20px",borderRadius:"5px",border:"1px solid gray",cursor:"pointer",textDecoration:"none"}}>

        <img style={{width:"100%",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}} src={data.gifUrl}/>
        <h2 style={{fontFamily:"Roboto",color:"#323233",fontSize:"20px",marginLeft:"8px",width:"100%",textAlign:"center"}}>{data.name[0].toUpperCase() + data.name.substring(1)}</h2>
        <p style={{fontFamily:"Roboto",color:"gray",fontSize:"12px",marginLeft:"8px",marginTop:"-3px",textAlign:"center"}}>BodyPart : {data.bodyPart[0].toUpperCase() + data.bodyPart.substring(1)}</p>
        <p style={{fontFamily:"Roboto",color:"gray",fontSize:"12px",marginLeft:"8px",marginTop:"0px",marginBottom:"10px",textAlign:"center"}}>Target : {data.target[0].toUpperCase() + data.target.substring(1)} </p>

    </Link>

    );

}
 
export default Card;