import Navbar from './Components/Navbar';
import Home from './Home';
import Add from  './Components/Add';
import BlogDetail from './Components/BlogDetail';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/blogs/:id" element={<BlogDetail/>}/>
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
