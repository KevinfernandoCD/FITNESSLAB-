import React from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExersices from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
    return ( 

        <Box>
            <HeroBanner/>
            <SearchExersices/>
        </Box>
     );
}
 
export default Home;