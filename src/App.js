import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import Resgister from './Components/Resgister';

//main page to routing for pages
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Resgister/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
