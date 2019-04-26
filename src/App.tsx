import React from 'react';
import { createStore } from 'redux';
import './App.css';
import  {Feeds}  from './pages/FeedPage/FeedPage';
import  Post  from './pages/PostPage/PostPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';



const store = createStore(reducer);

const App: React.FC = () => {
  return (
  <Provider store={store}>
      <BrowserRouter >
              <Switch>
                  <Route path='/' component={Feeds} exact/>
                  <Route path='/post' component={Post} exact/>
              </Switch> 
      </BrowserRouter>
  </Provider>
      
    
  );
}

export default App;
