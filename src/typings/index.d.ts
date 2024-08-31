// Please sort the keys when you add a new one in here
declare interface GlobalState {
    user: user.State;
    settings: settings.State;
    chat: chat.AccountOnline;
}

type ToastType = import('react-native-toast-notifications').ToastType;

declare global {
    const toast: ToastType;
}

declare let toast: ToastType;
