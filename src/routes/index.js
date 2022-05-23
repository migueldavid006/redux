import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Details from '../Views/Details';
import Home from '../Views/Home';
import Results from '../Views/Results';

const RoutesComponent = () =>(

    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path='/results' element={ <Results/>} />
            <Route path='/detail' element={ <Details/>} />
        </Routes>

    </BrowserRouter>

);

export default RoutesComponent;