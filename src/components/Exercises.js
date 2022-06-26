import { Stack } from '@mui/material';
import React, { useState } from 'react';
import Card from './Card';
import PaginateWithNum from './paginateWithNums';


const Exercises = ({exerciseData,search}) => {

    const [currentPageExercises,setCurrentPageExercises] = useState(1);
    const [exercisesPerPage,setExercisesPerPage] = useState(20);

    const lastIndexOfExercises = exercisesPerPage*currentPageExercises
    const firstIndexOfExercises = lastIndexOfExercises - exercisesPerPage 

    const transformedArray =  exerciseData?.slice(firstIndexOfExercises,lastIndexOfExercises);

    return ( 
        <>

       {search?<h4 style={{fontSize:"80px",fontFamily:"Roboto",marginLeft:"30px"}}><label style={{color:"#2FCE6F",borderRight:"1px solid gray",paddingRight:"20px"}}>{search[0].toUpperCase() + search.substring(1)}</label> Results.</h4>:<h4 style={{fontSize:"80px",fontFamily:"Roboto",marginLeft:"30px"}}>Popular Exercises.</h4>} 
        <Stack id="exercises" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            {transformedArray?.map(data => {

                return <Card key={data.id} data={data}/>

            })} 
           
        </Stack>
         <PaginateWithNum resultPerPage={exercisesPerPage} resultLength={exerciseData?.length} currentPage={currentPageExercises} setCurrentPage={setCurrentPageExercises}/>
                </>

    );
}
 
export default Exercises;