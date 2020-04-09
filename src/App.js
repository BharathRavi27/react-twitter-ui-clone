import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Trending } from './components/trending/Trending';
import { GlobalProvider } from './context/GlobalState';
import { Status } from './pages/Status';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <GlobalProvider >
      <Router >

        <ScrollToTop>
          <div className="App">
            <div className="side-nav">
              <Sidebar />
            </div>
            <div className="main">
              <Route exact path="/" component={Home} />
              <Route exact path="/status/:id" component={Status} />
            </div>

            <div className="trending">
              <Trending />
            </div>
          </div>
        </ScrollToTop>

      </Router>
    </GlobalProvider>
  );
}

export default App;
