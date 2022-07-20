import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Bar from './components/Bar/Bar'; 
import Categories from './components/Categories/Categories';
import HomePage from './components/HomePage/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Router>
      <Bar/>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;


