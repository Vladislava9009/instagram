import React from 'react';

import './App.css';
import { Feeds } from './pages/FeedPage/FeedPage';
import { Post } from './pages/PostPage/PostPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const App: React.FC = () => {
  return (
   
    <BrowserRouter >
           
             <Switch>
                <Route path='/' component={Feeds} exact/>
                <Route path='/post' component={Post} exact/>
             </Switch> 
         
      </BrowserRouter>
    
    
  );
}

export default App;
