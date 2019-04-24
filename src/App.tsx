import React from 'react';

import './App.css';
import { PostItem } from './components/PostsComponent/PostItem';
import { Posts } from './components/PostsComponent/Posts';

const App: React.FC = () => {
  return (
    <div>
      <Posts/>
      <Posts/>
      <Posts/>
    </div>
  );
}

export default App;
