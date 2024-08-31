import React, { ReactElement, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import Svgs from 'assets/svgs';
import { TouchableOpacity } from 'components/base';
import { useSetting } from 'contexts/SettingProvider';
import { goBack } from 'modules/navigation/src/utils';
import { Colors, Fonts, Sizes } from 'themes';
import scales from 'utils/scales';
import Images from 'assets/images';
import FastImage from 'react-native-fast-image';
import { validUrlImage } from 'utils/utils';

const image = 'https://www.meme-arsenal.com/memes/4cdee02fbf6649b4e2c7b597f9d4d143.jpg';


interface Props {
    showLineBottom?: boolean;
    title?: string;
    iconLeft?: ReactElement;
    hideLeft?: boolean;
    onPressLeft?: () => void;
    iconRight?: ReactElement;
    onPressRight?: () => void;
    name?: string;
    photo: string;
    isLong?: boolean;
    isTick?: boolean;
    isTickBot?: boolean;
    onPress?: () => void;
    isOnline?: boolean;
}

const HeaderChat = (props: Props) => {
    const { theme } = useSetting();
    const styles = getStyles(theme);
    const { showLineBottom, title, iconLeft, hideLeft, onPressLeft, iconRight, onPressRight, name, photo, isLong, isTick, isTickBot, onPress, isOnline } = props;
    const imageBg = isLong ? Images.BACKGROUND_HEADER_LONG : Images.BACKGROUND_HEADER_SHORT
    const [image, setImage] =  useState<any>(validUrlImage(photo))
    
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
        <TouchableOpacity style={styles.viewTitle} onPress={onPress} disabled={isTickBot}>
            <View>
                <FastImage
                    source={{ uri: image, priority: FastImage.priority.normal }}
                    style={styles.image}
                    onError={() => {
                        setImage('https://happysmile.dion.vn/happys/img/logo.png')
                    }}
                />
                {(isOnline || isTickBot) && <View style={styles.dot}/>}
            </View>
            
            <View style={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text numberOfLines={1} style={styles.textTitle}>{name}</Text>
                    {
                        isTick &&
                        <Svgs.IcTickCounselor width={scales(13)} height={scales(13)} marginLeft={scales(5)} top={scales(3)} />
                    }
                    {
                        isTickBot &&
                        <Svgs.IcTickBot width={scales(13)} height={scales(13)} marginLeft={scales(5)} top={scales(3)} />
                    }
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ImageBackground source={imageBg} resizeMode="stretch" style={[styles.header]}>
            {/* <StatusBar translucent backgroundColor="transparent" barStyle="light-content" /> */}
            <View style={styles.container}>
                {renderLeft()}
                {renderCenter()}
            </View>
        </ImageBackground>
    );
};

export default HeaderChat;

const getStyles = (theme: string) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Sizes.statusBarHeight + scales(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        paddingTop: Sizes.statusBarHeight + scales(10),
        height: Sizes.statusBarHeight + scales(70),
        backgroundColor: 'transparent',
        borderRadius: scales(10),
        overflow: 'hidden'
    },

    line: {
        height: scales(1),
        width: '100%',
        backgroundColor: 'black',
        marginTop: scales(10),
    },
    leftView: {
        justifyContent: 'center',
        position: 'absolute',
        top: scales(5),
        left: scales(15),
        bottom: 0,
    },
    viewTitle: {
        flex: 1,
        marginHorizontal: scales(55),
        height: scales(45),
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTitle: {
        ...Fonts.sfPro400,
        color: Colors.background1,
        fontSize: scales(14),
    },
    textContent: {
        ...Fonts.sfPro400,
        color: Colors.background1,
        fontSize: scales(12),
    },
    image: {
        width: scales(45),
        height: scales(45),
        borderRadius: scales(50),
        resizeMode: 'contain',
    },
    dot: {
        padding: scales(4),
        borderRadius: scales(10),
        backgroundColor: 'green', 
        bottom: 2,
        right: 2,
        position: 'absolute',
        borderWidth: scales(1),
        borderColor: Colors.background1
    },
    content: {
        paddingLeft: scales(15),
    },
});
