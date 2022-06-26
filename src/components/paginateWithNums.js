import React, { useEffect, useState } from 'react';


const PaginateWithNum = ({resultPerPage,resultLength,currentPage,setCurrentPage}) => {

    const paginateArray = [] 

    for(let i=1; i<= Math.ceil(resultLength/resultPerPage); i++){

    paginateArray.push(i)

    } 
    return ( 

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px",marginLeft:"10px"}}>
            
            {paginateArray.map(num => {

               return <div key={num} onClick={() => setCurrentPage(num)} style={{backgroundColor:currentPage == num?'whitesmoke':'transparent',padding:"5px",borderRadius:"50%",marginRight:"10px",cursor:"pointer",transition:"all 0.3s",width:"20px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Roboto"}}>{num}</div>
            
            })}

        </div>
     );

}
 
export default PaginateWithNum;