import React, { useEffect } from 'react';
import { BackHandler, Image, ImageURISource, StyleSheet, View } from 'react-native';

import Images from 'assets/images';
import { Text } from 'components/base';
import Button from 'components/button/Button';
import { useSetting } from 'contexts/SettingProvider';
import { Colors, Fonts } from 'themes';
import scales from 'utils/scales';

export enum DialogType {
    one = 'One Button',
    two = 'Two Button',
}

export interface DialogProps {
    isConfirm?: boolean;
    type?: DialogType;
    icon?: ImageURISource;
    title?: string;
    message?: string;
    textButtonClose?: string;
    textButtonConfirm?: string;
    onConfirm?: () => void;
    onClose?: () => void;
    renderContent?: React.ReactElement;
    withoutHideKB?: boolean;
}

const Dialog = (props: DialogProps) => {
    const { t, theme } = useSetting();
    const styles = myStyles(theme);
    const { isConfirm = false, type = DialogType.one, icon, title, message, textButtonClose, textButtonConfirm, onClose, onConfirm, renderContent } = props;

    useEffect(() => {
        const backAction = () => {
            onClose()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );

        return () => backHandler.remove();
      }, []);

    const renderIcon = () => {
        if (icon) {
            return (
                <View style={styles.iconContainer}>
                    <Image source={icon} style={styles.icon} />
                </View>
            );
        }
        // const iconConfirmation = Images[`CONFIRMATION${isConfirm ? '' : '_SUCCESS'}_${theme.toUpperCase()}`];
        // return (
        //     <View style={styles.iconContainer}>
        //         <Image source={iconConfirmation} style={styles.icon} />
        //     </View>
        // );
    };

    const renderTitle = () => title ? (
        <Text style={styles.title}>
            {title}
        </Text>
    ) : null;

    const renderMessage = () => message ? (
        <Text style={styles.message}>
            {message}
        </Text>
    ) : null;

    const renderButton = () => {
        switch (type) {
            case DialogType.two:
                return (
                    <View style={styles.viewButton}>
                        {renderButtonClose()}
                        {renderButtonConfirm()}
                    </View>
                );
            case DialogType.one:
            default:
                return (
                    <View style={styles.viewButton}>
                        {renderButtonConfirm()}
                    </View>
                );
        }
    };

    const renderButtonClose = () => (
        <Button
            title={textButtonClose || t('close')}
            customStyles={styles.buttonClose}
            customTextStyles={styles.buttonTextClose}
            onPress={onClose}
            disableGradient
        />
    );

    const renderButtonConfirm = () => (
        <Button
            title={textButtonConfirm || 'OK'}
            customStyles={styles.button}
            customTextStyles={styles.buttonText}
            onPress={onConfirm}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {renderIcon()}
                {renderTitle()}
                {renderMessage()}
                {renderContent}
                {renderButton()}
            </View>
        </View>
    );
};

export default Dialog;

const myStyles = (theme: string) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal: scales(40),
        backgroundColor: 'white',
        padding: scales(15),
        borderRadius: scales(15),
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    iconContainer: {
        paddingBottom: scales(10),
    },
    icon: {
        width: scales(50),
        height: scales(50),
    },
    title: {
        ...Fonts.sfPro600,
        fontSize: scales(16),
        color: 'black',
        textAlign: 'center',
        paddingBottom: scales(10),
    },
    message: {
        ...Fonts.sfPro400,
        fontSize: scales(14),
        color: 'black',
        textAlign: 'center',
    },
    button: {
        flex: 1,
        marginTop: scales(25),
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0,
    },
    buttonText: {
        color: Colors.background1,
    },
    buttonClose: {
        flex: 1,
        marginTop: scales(25),
        marginRight: scales(15),
        backgroundColor: Colors.background1,
        borderWidth: scales(1),
        borderColor: Colors.border,
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 0,
    },
    buttonTextClose: {
        color: Colors.text,
    },
    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
