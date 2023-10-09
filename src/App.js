import './App.css';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Read from './components/Read';
import Update from './components/Updated';


function App() {

  
  return (
    <>
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div>
            <Routes>
              <Route exact path='/' Component={Create} />
            </Routes>
            <div style={{ marginTop: 20 }}>
              <Routes>
                <Route exact path='/read' Component={Read} />
              </Routes>
            </div>
            <Routes>
              <Route path='/update' Component={Update} />
            </Routes>
          </div> 
        </div>
      </Router >


      
    </>
  );
}

export default App;