import BigNumber from 'bignumber.js';
import React, { ForwardedRef, forwardRef, ReactElement, useImperativeHandle, useRef, useState } from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';

import { TouchableOpacity } from 'components/base';
import { useSetting } from 'contexts/SettingProvider';
import { Colors, Fonts } from 'themes';
import scales from 'utils/scales';
import Svgs from 'assets/svgs';

export interface InputProps extends TextInputProps {
    title?: string;
    rightIconTitle?: ReactElement;
    rightTitle?: string;
    onPressRightTitle?: () => void;
    errorMessage?: string;
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    bottomMessage?: string;
    icon?: ReactElement;
    onPressIcon?: () => void;
    leftIcon?: ReactElement;
    onPressLeftIcon?: () => void;
    leftIconStyle?: StyleProp<ViewStyle>;
    rightIconStyle?: StyleProp<ViewStyle>;
    isSelect?: boolean;
    onPress?: () => void;
    valueSelect?: string;
    iconVisible?: boolean;
}

export interface InputRefType {
    focusInput: () => void;
}

const InputDatePicker = (props: InputProps, ref: ForwardedRef<InputRefType>) => {
    const styles = myStyles();
    const { icon, onPressIcon, errorMessage, bottomMessage, onPress,
        leftIcon, onPressLeftIcon, containerStyle, inputContainerStyle, inputStyle, leftIconStyle, rightIconStyle, isSelect, valueSelect, iconVisible } = props;
    const disabledButtonLeft = new BigNumber(props?.value || '0').isZero();
    const _inputRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);


    const handleFocus = () => {
        setIsFocused(true);
      };
    
    const handleBlur = () => {
        setIsFocused(false);
    };

    useImperativeHandle(ref, () => ({
        focusInput,
    }));

    const focusInput = () => _inputRef?.current?.focus();


    return (
        <View style={[styles.container, containerStyle,]}>
            <TouchableOpacity
                activeOpacity={isSelect ? 0 : 1}
                style={[
                    styles.inputContainer,
                    inputContainerStyle,
                ]}
                onPress={isSelect ? onPress : focusInput}
            >
                {leftIcon ? (
                    <TouchableOpacity
                        onPress={onPressLeftIcon}
                        disabled={disabledButtonLeft}
                        style={disabledButtonLeft ? { opacity: 0.3 } : leftIconStyle}
                    >
                        {leftIcon}
                    </TouchableOpacity>
                ) : null}
                {
                    !isSelect ? (
                        <TextInput
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            ref={_inputRef}
                            style={[styles.input, inputStyle, ]}    
                            {...props}
                        />
                    ) : 
                    (
                        <View style={[styles.input, inputStyle, ]}>
                            <Text style={styles.valueSelect}>{valueSelect}</Text>
                        </View>
                    )
                }
                
                {icon ? (
                    <TouchableOpacity onPress={onPressIcon} hitSlop={styles.hitSlopIcon} style={[styles.rightIcon ,rightIconStyle]} disabled={iconVisible}>
                        {icon}
                    </TouchableOpacity>
                ) : null}
                {isSelect ? (
                    <Svgs.IcDropdown width={scales(25)} height={scales(25)} left={scales(10)}/>
                ) : null}
            </TouchableOpacity>
            {errorMessage ? (
                <Text style={styles.errorText}>
                    {errorMessage}
                </Text>
            ) : bottomMessage ? (
                <Text style={styles.bottomText}>
                    {bottomMessage}
                </Text>
            ) : null}
        </View>
    );
};

export default forwardRef(InputDatePicker);

const myStyles = () => StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: scales(15)
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textDecorationLine: 'none',
        minHeight: scales(40),
        borderRadius: scales(10),
        backgroundColor: Colors.background2
    },
    input: {
        flex: 1,
        ...Fonts.sfPro400,
        fontSize: scales(13),
        color: Colors.text,
        paddingHorizontal: scales(10),
        ...Platform.select({
            ios: {
                height: scales(40),
            },
            android: {
                height: scales(40),
            },
            default: {},
        }),
    },
    hitSlopIcon: {
        top: 15,
        bottom: 15,
        left: 15,
        right: 15,
    },
    errorText: {
        ...Fonts.sfPro400,
        paddingTop: scales(5),
        color: 'red',
        fontSize: scales(13),
    },
    bottomText: {
        ...Fonts.sfPro400,
        paddingTop: scales(10),
        color: 'transparent',
        fontSize: scales(13),
    },
    valueSelect: {
        ...Fonts.sfPro400,
        fontSize: scales(13),
        color: Colors.text,
        ...Platform.select({
            ios: {},
            android: {
                paddingTop: scales(14)
            },
            default: {},
        }),
        
    },
    rightIcon:{
        paddingHorizontal: scales(10),
    }
});
