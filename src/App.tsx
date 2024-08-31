
import React, { useEffect } from "react";

import StackNavigator from "modules/navigation/views/Navigation";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";

import Toast from 'react-native-toast-notifications';
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from 'react-native-splash-screen'

// // create i18n
// const initI18n = i18n;

const App = () => {
  useEffect( () => {
    setTimeout(() => {SplashScreen.hide();}, 1000)
  });
    return(
  
      <RootSiblingParent>
       
        
            <StackNavigator/>
          
       
        <Toast ref={(ref) => toast = ref} />
      </RootSiblingParent>
    )
  }


  
export default App;