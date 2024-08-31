import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

import { TouchableOpacity } from 'components/base';
import { useSetting } from 'contexts/SettingProvider';
// import { checkConnected } from 'services/api-requests';
import { Colors, Fonts } from 'themes';
import scales from 'utils/scales';
// import { showCustomToast } from 'utils/toast';

interface ButtonProps {
    title: string;
    width?: number;
    height?: number;
    disabled?: boolean;
    disableGradient?: boolean;
    customStyles?: StyleProp<ViewStyle>;
    customTextStyles?: StyleProp<TextStyle>;
    loadingColor?: string;
    onPress?: () => void;
    loading?: boolean;
    icon?: React.ReactNode;
}

// eslint-disable-next-line complexity
const Button = (props: ButtonProps) => {
    const { t, theme } = useSetting();
    const styles = myStyles(theme);
    const { title, width, height, disabled = false, disableGradient = false, customStyles, customTextStyles, loading, loadingColor, icon } = props;

    const onPress = async () => {
        // const isConnected = await checkConnected();
        // if (!isConnected) {
        //     showCustomToast(t('network.error'))
        // } else {
            props.onPress()
        // }
    }

    return (
        <TouchableOpacity
            style={[
                styles.container,
                width ? { width } : {},
                height ? { height } : {},
                // disabled ? { backgroundColor: Colors[theme!].textColorOpacity30 } : {},
                customStyles,
            ]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {/* {disabled || disableGradient ? null : (
                <LinearGradient
                    useAngle
                    angle={90}
                    start={{ x: 0, y: 1 }}
                    colors={[Colors.main, Colors.main2]}
                    style={styles.linearGradient}
                />
            )} */}
            {loading ? (
                <ActivityIndicator color={loadingColor || Colors.text} />
            ) : (
                <Text style={[styles.title, disabled ? { color: Colors.border } : {}, customTextStyles]}>{title}</Text>
            )}
            {icon && icon}
        </TouchableOpacity>
    );
};

export default Button;

const myStyles = (_theme: string) => StyleSheet.create({
    container: {
        height: scales(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scales(35),
        backgroundColor: Colors.main,
        shadowColor: Colors.main,
        elevation: 11,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 7,
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: scales(5),
    },
    title: {
        ...Fonts.sfPro400,
        color: Colors.background1,
        fontSize: scales(15),
        paddingBottom: scales(1),
    },
});
