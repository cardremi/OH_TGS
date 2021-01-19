import React from 'react';
import Parent from './Src/Features/Parent/Parent'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {appReducer} from './Src/Redux/Index'
import Home from './Src/Features/Home/Home'

const App: () => React$Node = () => {
  const store = createStore (appReducer)
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
};



export default App;
