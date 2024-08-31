import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useRef, useState } from 'react'
import { RootNavigatorParamList } from 'modules/navigation/typings'
import Screen from 'modules/navigation/src/constants';

import { NavigationContainer } from '@react-navigation/native';
import { AppState, PermissionsAndroid, Platform, StatusBar } from 'react-native';

import LoadingModal, { LoadingModalRef } from 'components/loading/LoadingModal';
import loadingManager from 'components/loading/loadingManager';
import { useDispatch, useSelector } from 'react-redux';

import { AuthStack } from './AuthStack';
import { AppStack } from './AppStack';




const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootStack = () => {
  // const isLogin = useSelector(isLoginSelector)

    return (
        <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right'}}
        >
            {
              // !isLogin ?
              //   <Stack.Screen name='AuthStack' component={AuthStack} />
              //   :
                <Stack.Screen name='AppStack' component={AppStack} />
            }

        </Stack.Navigator>
    )
}



interface StackNavigatorStateProps {

}

interface StackNavigatorDispatchProps {

}

type StackNavigatorProps = StackNavigatorStateProps | StackNavigatorDispatchProps;

const StackNavigator = () => {
    // const { theme } = useSetting();
    // const loadingRef = useRef<LoadingModalRef | null>(null);
    // const isLogin = useSelector(isLoginSelector)
    // const dispatch = useDispatch();
    // const user = useSelector(profileSelector);
    // const subScription = new Subscription();
    // const appState = useRef(AppState.currentState);

    // useEffect(() => {
    //   if(user?.id){
    //     SocketUtils.getInstance().connectCheckAccountOnline(user.id);
    //   }
    //   return () => {
    //     SocketUtils.getInstance().disconnectSendAccountOnline();
    //   }
    // },[user])
  
    // useEffect(() => {
    //   const subscription = AppState.addEventListener('change', nextAppState => {
    //     appState.current = nextAppState;

    //     if(appState.current === 'active'){
    //       if(user.id){
    //         SocketUtils.getInstance().connectCheckAccountOnline(user.id);
    //       }
    //     }else if(appState.current === 'inactive'){
    //       SocketUtils.getInstance().disconnectSendAccountOnline();
    //     }else if(appState.current === 'background'){
    //       SocketUtils.getInstance().disconnectSendAccountOnline();
    //     }
    //   });
  
    //   return () => {
    //     subscription.remove();
    //     SocketUtils.getInstance().disconnectSendAccountOnline();
    //   };
    // }, [user]);

    // useEffect(() => {
    //   onRegisterEventBus();
    //   return () => {
    //       subScription?.unsubscribe?.();
    //   };
    // }, []);

    // const onRegisterEventBus = () => {
    //     subScription.add(EventBus.getInstance().events.subscribe((res: BaseEventType) => {
    //         if (res?.type === EVENTS.SEND_ACCOUNT_ONLINE) {
    //             if (res?.payload?.data) {
    //                 dispatch(chatActionCreators.getListAccountOnlineSuccess(res?.payload?.data));
    //             }
    //         }
    //     }));
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if(isLogin){
    //             dispatch(userActionCreators.checkToken())
    //         }
    //       }, 5000);
    //       return () => clearInterval(interval);
    // },[isLogin])

    // useEffect(() => {
    //     requestCameraPermission();
    //     // dispatch(userActionCreators.getIsShowDeleteButton())
    // })

    // const requestCameraPermission = async () => {
    //     try {
    //       if(Platform.OS === 'android'){
    //         const granted = await PermissionsAndroid.request(
    //           PermissionsAndroid.PERMISSIONS.CAMERA,
    //           {
    //             title: 'Cool Photo App Camera Permission',
    //             message:
    //               'Cool Photo App needs access to your camera ' +
    //               'so you can take awesome pictures.',
    //             buttonNeutral: 'Ask Me Later',
    //             buttonNegative: 'Cancel',
    //             buttonPositive: 'OK',
    //           },
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //           console.log('You can use the camera');
    //         } else {
    //           console.log('Camera permission denied');
    //         }
    //       }
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   };

    // const renderLoadingModal = () => (
    //     <LoadingModal
    //         ref={(ref) => {
    //             loadingRef.current = ref;
    //             loadingManager.register(loadingRef.current!);
    //         }}
    //     />
    // );

    return (
        <NavigationContainer >
            <StatusBar 
            
            />
            <RootStack/>
           
        </NavigationContainer>
    )
}

export default (StackNavigator);