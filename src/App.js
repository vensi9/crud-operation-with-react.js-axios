import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Updated';
import './App.css';

function App() {
  return (
      <Router>
        <div className="main">
          <div className="content">
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
        </div>
      </Router>
  );
}

export default App;