import * as React from 'react';   
import Navigation from './src/components/Navigation';
import { Provider } from 'react-redux';
import {store} from "./src/redux/store";


 const App = () => { 
  
  return (  
    <Provider store={store}>
      <Navigation/> 
    </Provider>
  );
}
export default App;