
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import { Box } from '@mui/material';
import NavBar from './components/NavBar'
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m='auto'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;