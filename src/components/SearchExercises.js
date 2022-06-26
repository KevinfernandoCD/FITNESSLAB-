import { Stack,Box,Typography,TextField,Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {fetchData,options} from '../utils/fetchData';
import Pagination from './Pagination';
import CategoryCard from './categoryCard';
import Exercises from './Exercises';



const SearchExersices = () => {

    const [search,setSearch] = useState('');
    const [results,setResults] = useState();
    const [bodyParts,setBodyParts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [resultsPerPage,setResultsPerPage] = useState(3);
   


    const fetchExerciseData = async() => {

        const fetchedbodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',options)

        setBodyParts(fetchedbodyParts)
    }

    const popularResult = async() => {

        if(search == ''){

        const sampleData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',options);

        if(sampleData.length > 100){

            const reducedArray =  sampleData.slice(0,99);

            setResults(reducedArray);
       
        }
    }    
}

        useEffect(() => {

        fetchExerciseData();

        popularResult();


    },[])

        const lastIndex = currentPage*resultsPerPage
        const firstIndex = lastIndex - resultsPerPage 

        const slicesArray =  bodyParts.slice(firstIndex,lastIndex)

    const handleSearch = async() => {

        if(search !== '') {
       

           const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',options);

           const filteredData =  exercisesData.filter((exercise) => {

     return exercise.name.toLowerCase().includes(search) || 
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) || 
        exercise.bodyPart.toLowerCase().includes(search)

        })

           if(filteredData.length == 0) {

            console.log('No Result')

           }else{

            if(filteredData.length > 100){

            const reducedArray =  filteredData.slice(0,99);

            setResults(reducedArray);

            }else{

            setResults(filteredData);    

            }
        }

    }

}




      

    return ( 

    <>
    <Stack className='search' style={{width:"100%"}} alignItems="center" p="20px" sx={{mt:{sm:"150px" ,lg:"300px"}}}>
        <Typography sx={{fontSize:{lg:"60px",sm:"50px",xs:"60px"},textAlign:{xs:"left",sm:"center"}}} style={{fontWeight:"bold",color:"#323233",marginBottom:"50px"}}>
            Search Exercises For <br/> Your Liking.
        </Typography>
        <TextField height="50px" value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeholder="Search For An Exercise" type="text" sx={{input:{fontWeight:"500",border:"none",borderRadius:"5px"},width:{lg:"1000px",sm:"500px",xs:"90%"},marginRight:{xs:"50px",sm:"0px",lg:"0px"},marginTop:{xs:"-30px",sm:"0px"}}}/>
        <Button onClick={handleSearch} variant="outlined" sx={{width:{lg:"300px",sm:"200px",xs:"200px"},marginRight:{xs:"230px",sm:"0px"}}} style={{marginTop:"20px"}}>Search</Button>
        <Stack style={{display:"flex",justifyContent:"center",alignItems:"center"}} sx={{width:{xs:"200px",sm:"500px",lg:"800px"},marginLeft:{lg:"185px",sm:"85px",xs:"-20px"},flexDirection:{lg:"row",sm:"column",xs:"column"}}}>
            {slicesArray?.map(cata => <CategoryCard key={cata} setSearch={setSearch}  cata={cata}/>)}
        </Stack>
         <Pagination resultPerPage={resultsPerPage} resultLength={bodyParts.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </Stack>
 
         <Exercises search={search} exerciseData={results}/>  
  
  </>
    );
}
 
export default SearchExersices;