import React, { useEffect, useState } from 'react';
import {fetchData,options} from '../utils/fetchData';
import {useParams} from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';


const ExerciseDetails = () => {

    const [detailData,setDetailData] = useState();

    const {id}  = useParams();

    const fetchExerciseDetail = async() => {


        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,options)

        setDetailData(data)

    }

    useEffect(() => {

     fetchExerciseDetail();

    },[]);

    console.log(detailData);

    return ( 

        <Stack style={{display:"flex",alignItems:"center",fontFamily:"Roboto"}} sx={{flexDirection:{xs:"column",sm:"column",lg:"row"},justifyContent:{xs:"center",sm:"flex-start",lg:"space-around"}}}>
            <Stack style={{paddingRight:"50px"}} sx={{borderRight:{xs:"none",sm:"none",lg:"1px solid gray"}}}>
                <img style={{width:"500px",height:"500px"}} src={detailData?.gifUrl}/>
            </Stack>
            <Stack style={{display:"flex",flexDirection:"column"}} sx={{textAlign:{xs:"center",sm:"center",lg:"left"},alignItems:{xs:"center",sm:"center",lg:"start"}}}>
                <h1 style={{fontSize:"40px"}}>{detailData?.name[0].toUpperCase() + detailData?.name.substring(1)}</h1>
                <Typography sx={{width:{xs:"400px",sm:"600px"}}} style={{fontSize:"13px",marginTop:"0px",marginBottom:"12px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Typography>
                <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"13px",fontWeight:"bold",marginBottom:"12px",marginTop:"15px"}}><FitnessCenterIcon style={{marginRight:"10px"}}/> {detailData?.equipment[0].toUpperCase() + detailData?.equipment.substring(1)}</div>  
                <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"13px",fontWeight:"bold",marginBottom:"12px"}}><AccessibilityIcon style={{marginRight:"10px"}}/>{detailData?.bodyPart[0].toUpperCase() + detailData?.bodyPart.substring(1)}</div> 
                <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontSize:"13px",fontWeight:"bold",marginBottom:"12px"}}><ModeStandbyIcon style={{marginRight:"10px"}}/>{detailData?.target[0].toUpperCase() + detailData?.target.substring(1)}</div> 
            </Stack>  
        </Stack>
     );
}
 
export default ExerciseDetails;