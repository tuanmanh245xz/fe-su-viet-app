import React from 'react';
import { Animated, Keyboard, StyleSheet } from 'react-native';
import RootSiblings from 'react-native-root-siblings';

import { TouchableOpacity } from 'components/base';
import Dialog, { DialogProps } from 'components/dialog/Dialog';
import { Colors, Sizes } from 'themes';
import scales from 'utils/scales';

const elements = [];

export default class DialogUtil {
    public static async showMessageDialog(dialogConfig: DialogProps) {
        const animated = new Animated.Value(0.1);
        await animated.setValue(0.1);
        await Animated.spring(animated, {
            toValue: 1,
            tension: 65,
            friction: 5,
            useNativeDriver: true,
        }).start();

        const sibling = new RootSiblings(
            <TouchableOpacity
                activeOpacity={1}
                style={styles.container}
                onPress={this.dismiss}
            >
                <Animated.View style={{ transform: [{ scale: animated }] }}>
                    <Dialog {...dialogConfig} onClose={this.dismiss} />
                </Animated.View>
            </TouchableOpacity>
        );

        if (!dialogConfig?.withoutHideKB) {
            Keyboard.dismiss();
        }
        elements.push(sibling);
    }

    public static dismiss() {
        const lastSibling = elements.pop();
        if (lastSibling) {
            lastSibling.destroy();
        }
    }
}

const styles = StyleSheet.create({
    dropdownContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
    },
});
