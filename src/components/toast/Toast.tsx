import { StyleSheet } from 'react-native';
import { Colors, Fonts, Sizes } from 'themes';
import scales from 'utils/scales';

export const customToast = (message: string) => {
    /*
    Custom toast
    */
    toast.show(message, {
        placement: 'top',
        textStyle: customStyles.textCustomToast,
        style: customStyles.viewToast,
        duration: 3000
    });
};

const customStyles = StyleSheet.create({
    viewToast: {
        flex: 1,
        backgroundColor: Colors.border,
        alignSelf: 'center',
        borderRadius: scales(5),
        paddingHorizontal: scales(30),
        paddingVertical: scales(15),
        marginTop: Sizes.statusBarHeight + scales(10),
        opacity: 1,
    },
    textCustomToast: {
        fontSize: scales(14),
        ...Fonts.sfPro400,
        color: Colors.text,
        fontWeight: '400',
    },
});
