import logo from './logo.svg';
import './App.css';
import NavBar from './NavaBar';
import Content from './content.js'
import Navbar2 from './navbar2.js'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import DM from './datama.js'

function App() {
  return (
    // <>
    //   <NavBar></NavBar>
    //   <Navbar2></Navbar2>
    //   <Content></Content>
      
    // </>
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<><Navbar2></Navbar2><Content></Content></>}>
          
        </Route>
        <Route path='/datamap' element={<DM></DM>}>
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
