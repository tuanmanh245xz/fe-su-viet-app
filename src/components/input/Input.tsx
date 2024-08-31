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
    isRequire?: boolean;
}

export interface InputRefType {
    focusInput: () => void;
}

const Input = (props: InputProps, ref: ForwardedRef<InputRefType>) => {
    const styles = myStyles();
    const { title, rightTitle, rightIconTitle, onPressRightTitle, icon, onPressIcon, errorMessage, bottomMessage, onPress,
        leftIcon, onPressLeftIcon, containerStyle, inputContainerStyle, inputStyle, leftIconStyle, rightIconStyle, isSelect, valueSelect, iconVisible, isRequire} = props;
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

    const renderHeader = () => title || rightTitle ? (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                {title}
                { isRequire && <Text style={{ color: 'red'}}> *</Text>}
            </Text>
            {rightTitle || rightIconTitle ? (
                <TouchableOpacity onPress={onPressRightTitle} style={styles.headerRight}>
                    {rightIconTitle ? rightIconTitle : null}
                    {rightTitle ? (
                        <Text style={[styles.headerText, { paddingLeft: scales(5) }]}>
                            {rightTitle}
                        </Text>
                    ) : null}
                </TouchableOpacity>
            ) : null}
        </View>
    ) : null;

    return (
        <View style={[styles.container, containerStyle,]}>
            {renderHeader()}
            <TouchableOpacity
                activeOpacity={isSelect ? 0 : 1}
                style={[
                    styles.inputContainer,
                    inputContainerStyle,
                    errorMessage ? { borderColor: 'red' } : {},
                    isFocused ? { borderColor: '#CF7C7C' } : {},
                ]}
                onPress={isSelect ? onPress : focusInput}
            >
                {leftIcon ? (
                    <TouchableOpacity
                        onPress={onPressLeftIcon}
                        disabled={disabledButtonLeft}
                        hitSlop={styles.hitSlopIcon}
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
                            placeholderTextColor={Colors.label}
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
                    <TouchableOpacity onPress={onPressIcon} hitSlop={styles.hitSlopIcon} style={rightIconStyle} disabled={iconVisible}>
                        {icon}
                    </TouchableOpacity>
                ) : null}
                {isSelect && !icon ? (
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

export default forwardRef(Input);

const myStyles = () => StyleSheet.create({
    container: {
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: scales(5),
    },
    headerText: {
        ...Fonts.sfPro400,
        fontSize: scales(13),
        color: Colors.text,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: scales(46),
        maxHeight: scales(150),
        borderRadius: scales(10),
        paddingRight: scales(15),
        backgroundColor: Colors.background2,
    },
    input: {
        flex: 1,
        ...Fonts.sfPro400,
        fontSize: scales(13),
        color: Colors.text,
        paddingHorizontal: scales(15),
        ...Platform.select({
            ios: {},
            android: {
                height: scales(46),
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
        
    }
});
