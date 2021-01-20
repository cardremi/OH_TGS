import React, {useEffect} from 'react';
import Parent from './Src/Features/Parent/Parent'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {appReducer} from './Src/Redux/Index'
import Home from './Src/Features/Home/Home'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MartabakAsinSekali from './Src/Features/Detail/MartabakAsinSekali';

const Rootstack = createStackNavigator ()


const App: () => React$Node = () => {
  const store = createStore (appReducer)

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (

    <Provider  store={store}>
    <NavigationContainer>
      <Rootstack.Navigator initialRouteName='Home'>
          <Rootstack.Screen name='Home' component={Home} />
          <Rootstack.Screen name='Martabak' options={{headerShown:false}} component={MartabakAsinSekali}/>
      </Rootstack.Navigator>
    </NavigationContainer>
    </Provider>
  );
  
};



export default App;
