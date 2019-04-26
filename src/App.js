import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from './components/Nav';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';
import Demo3 from './pages/Demo3';
import Demo4 from './pages/Demo4';
import Demo5 from './pages/Demo5';
import Demo6 from './pages/Demo6';
import Demo7 from './pages/Demo7';

const App = props => {
  return (
    <Router>
      <div>
        <Route path="/" component={Nav} />
        <Route path="/demo1" component={Demo1} />
        <Route path="/demo2" component={Demo2} />
        <Route path="/demo3" component={Demo3} />
        <Route path="/demo4" component={Demo4} />
        <Route path="/demo5" component={Demo5} />
        <Route path="/demo6" component={Demo6} />
        <Route path="/demo7" component={Demo7} />
      </div>
    </Router>
  );
};

export default App;
