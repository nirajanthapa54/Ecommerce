import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Search from './components/Search';
import View from './components/View';

const App=()=> {
  return (
    <div>

<Router>

 
<Routes>

<Route  exact path='/' element={<Search/>} />
<Route exact path= "/View/:id" element ={<View/>}/>

 
  
</Routes>


</Router>

    </div>
  );
}

export default App;
