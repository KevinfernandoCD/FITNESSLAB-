import React, { useEffect, useState } from 'react';


const Pagination = ({resultPerPage,resultLength,currentPage,setCurrentPage}) => {

    const paginateArray = [] 

    for(let i=1; i<= Math.ceil(resultLength/resultPerPage); i++){

    paginateArray.push(i)

    } 
    return ( 

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",marginLeft:"10px"}}>
            
            {paginateArray.map(num => {

               return <div key={num} onClick={() => setCurrentPage(num)} style={{backgroundColor:currentPage == num?'gray':'transparent',padding:"5px",borderRadius:"50%",border:"1px solid gray",marginRight:"10px",cursor:"pointer",transition:"all 0.3s"}}></div>
            
            })}

        </div>
     );

}
 
export default Pagination;