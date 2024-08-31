import { StackActions, createNavigationContainerRef } from "@react-navigation/native";
import { RootNavigatorParamList } from "modules/navigation/typings";
import { store } from "redux/store";

export const navigationRef = createNavigationContainerRef<RootNavigatorParamList>();

const SCREENS_NEED_LOGIN: (keyof RootNavigatorParamList)[] = [
    'AuctionPropertyDetail',
    'User',
    'AuctionListBiding'
]

export function navigate(
    name: keyof RootNavigatorParamList,
    params?: RootNavigatorParamList[keyof RootNavigatorParamList]
) {
    const isLogin = store.getState()?.user?.isLogin;
    if(navigationRef.isReady()) {
        if(!isLogin && SCREENS_NEED_LOGIN.includes(name)) {
            navigate('Login', {
                loginSuccess: () => {
                    popToTop();
                    navigate(name,params)
                }
            })
        }else{
            // @ts-ignore
            navigationRef.navigate(name, params);
        }
    }
}

export function goBack() {
    navigationRef.goBack();
}

export function popToTop() {
    navigationRef.dispatch(StackActions.popToTop());
}

export function resetStack(name: keyof RootNavigatorParamList, params = {}) {
    navigationRef.reset({
        index: 0,
        routes: [
            {
                name,
                params,
            },
        ],
    });
}