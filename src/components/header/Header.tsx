import React, { ReactElement } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, StyleProp, Image } from 'react-native';
import Images from 'assets/images';
import Svgs from 'assets/svgs';
import { TouchableOpacity } from 'components/base';
import { useSetting } from 'contexts/SettingProvider';
import { goBack } from 'modules/navigation/src/utils';
import { Colors, Fonts, Sizes } from 'themes';
import scales from 'utils/scales';

interface Props {
    title?: string;
    iconLeft?: ReactElement;
    hideLeft?: boolean;
    onPressLeft?: () => void;
    iconRight?: ReactElement;
    onPressRight?: () => void;
    isLong?: boolean;
    isLogin?: boolean;
}

const Header = (props: Props) => {
    const { theme } = useSetting();
    const styles = getStyles(theme);
    const { title, iconLeft, hideLeft, onPressLeft, iconRight, onPressRight, isLong, isLogin } = props;
    const imageBg = isLong ? Images.BACKGROUND_HEADER_LONG : Images.BACKGROUND_HEADER_SHORT

    const renderLeft = () => !hideLeft ? (
        <TouchableOpacity
            style={styles.leftView}
            onPress={onPressLeft || goBack}
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
        >
            {iconLeft ? iconLeft : <Svgs.IcBackHeader width={scales(27)} height={scales(27)} />}
        </TouchableOpacity>
    ) : (
        <View style={styles.leftView} />
    );

    const renderCenter = () => (
        <View style={styles.viewTitle}>
            {isLogin && <Image source={Images.IMAGE_LOGIN} style={styles.image} />}
            <Text style={[styles.textTitle, isLogin && styles.textCustom]} numberOfLines={1}>
                {title?.trim()}
            </Text>
        </View>
    );

    const renderRight = () => iconRight ? (
        <TouchableOpacity
            style={styles.rightView}
            disabled={!onPressRight}
            onPress={onPressRight ? onPressRight : () => {}}
        >
            {iconRight}
        </TouchableOpacity>
    ) : (
        <View style={styles.rightView} />
    );

    return (
        <ImageBackground source={imageBg} resizeMode="stretch" style={[styles.header, (isLong || isLogin) && styles.headerLong]}>
            <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
            <View style={styles.headerContainer}>
                {renderLeft()}
                {renderCenter()}
                {renderRight()}
            </View>
        </ImageBackground>
    );
};

export default Header;

const getStyles = (theme: string) => StyleSheet.create({
    header: {
        paddingTop: Sizes.statusBarHeight + scales(10),
        height: Sizes.statusBarHeight + scales(60),
        backgroundColor: 'transparent',
        borderRadius: scales(10),
        overflow: 'hidden'
    },
    headerLong: {
        height: Sizes.statusBarHeight + scales(125),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftView: {
        justifyContent: 'center',
        position: 'absolute',
        left: scales(15),
    },
    viewTitle: {
        flex: 1,
        marginHorizontal: scales(45),
        height: scales(45),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitle: {
        ...Fonts.sfPro400,
        color: 'white',
        fontSize: scales(15),
    },
    rightView: {
        justifyContent: 'center',
        position: 'absolute',
        top: scales(10),
        right: scales(15),
    },
    image: {
        width: scales(145),
        height: scales(50),
        resizeMode: 'contain',
        marginTop: Sizes.statusBarHeight + scales(80),
    },
    textCustom: {
        ...Fonts.sfPro700,
        color: 'white',
        fontSize: scales(24),
        fontWeight: 'bold',
        paddingTop: scales(5),
    }
});
