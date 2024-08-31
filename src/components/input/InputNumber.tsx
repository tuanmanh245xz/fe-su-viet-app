import BigNumber from 'bignumber.js';
import { t } from 'i18next';
import React, { ForwardedRef, forwardRef, useImperativeHandle, useRef } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SvgIcon from 'assets/svgs';
import Input, { InputProps, InputRefType } from 'components/input/Input';
import { useSetting } from 'contexts/SettingProvider';
import { Colors, Fonts } from 'themes';
import { formatCurrencyWithDecimals, formatCurrencyWithoutComma } from 'utils/number';
import scales from 'utils/scales';
import { formatNumberInputWhenBlur, validateInputNumber } from 'utils/string';

export interface InputNumberProps extends InputProps {
    decimal?: number | string;
    beforeDecimal?: number | string;
    isUpDown?: boolean;
    miniumValue?: string;
    currentSelect?: string;
    onChooseTopSelect?: (currency: string) => void;
    listTopSelect?: string[];
    isBottomSheet?: boolean;
    isMonas?: boolean;
    allowNegative?: boolean;
    onBlur?: () => void
}

const InputNumber = (props: InputNumberProps, ref: ForwardedRef<InputRefType>) => {
    const { theme } = useSetting();
    const styles = myStyles(theme);
    const { isUpDown, miniumValue, inputContainerStyle, inputStyle, isBottomSheet, onChooseTopSelect, listTopSelect, currentSelect, isMonas } = props;
    const currentValue = props.value;
    const decimal = typeof props.decimal === 'string' ? parseInt(props.decimal) : props.decimal;

    const fontSize = isMonas ? scales(12) : scales(13)
    const _inputRef = useRef<InputRefType>(null);


    useImperativeHandle(ref, () => ({
        focusInput: _inputRef?.current?.focusInput,
    }));

    const handleChangeText = (text: string) => {
        const number = text.replace(new RegExp('x', 'g'), '')
        const beforeDecimal = typeof props.beforeDecimal === 'string' ? parseInt(props.beforeDecimal) : props.beforeDecimal;
        const str = validateInputNumber(number, props.value, decimal, beforeDecimal, props?.allowNegative);
        props?.onChangeText(str)
    }

    const handleUp = () => {
        const value = new BigNumber(currentValue || 0).plus(miniumValue || 0).toString();
        props?.onChangeText(formatCurrencyWithoutComma(value));
    }

    const handleDown = () => {
        if (new BigNumber(currentValue).gte(miniumValue)) {
            const value = new BigNumber(currentValue || 0).minus(miniumValue || 0).toString();
            props?.onChangeText(formatCurrencyWithoutComma(value));
        }
    }

    const chooseTopSelect = (currency: string) => () => onChooseTopSelect(currency);

    const onBlur = () => {
        if (props.value) {
            props?.onChangeText(formatNumberInputWhenBlur(props.value));
        }
        if (props?.onBlur) {
            props?.onBlur();
        }
    }

    if (isUpDown) {
        return (
            <View>
                {listTopSelect?.length > 1 ? (
                        <View style={[styles.selectPair]}>
                            <TouchableOpacity
                                style={[styles.buttonCurrency, styles.col]}
                                onPress={chooseTopSelect(listTopSelect[0])}
                            >
                                <Text style={[styles.textCurrency, currentSelect === listTopSelect[0] && styles.textBlack]}>
                                    {t(listTopSelect[0])}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonCurrency}
                                onPress={chooseTopSelect(listTopSelect[1])}
                            >
                                <Text style={[styles.textCurrency, currentSelect === listTopSelect[1] && styles.textBlack]}>
                                    {t(listTopSelect[1])}
                                </Text>
                            </TouchableOpacity>
                        </View>
                ) : null}
                <Input
                    ref={_inputRef}
                    keyboardType='numeric'
                    {...props}
                    value={props.value}
                    inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
                    inputStyle={[{ textAlign: 'center', fontSize }, Platform.OS === 'ios' && { height: scales(25) }, inputStyle]}
                    onChangeText={handleChangeText}
                    leftIcon={isUpDown ? (
                        <View style={[styles.buttonUpDown, { paddingLeft: scales(8) }]}>
                            <SvgIcon.IcMinus color={Colors[theme].textColor} />
                        </View>
                    ) : null}
                    icon={isUpDown ? (
                        <View style={[styles.buttonUpDown, { paddingRight: scales(8) }]}>
                            <SvgIcon.IcPlus color={Colors[theme].textColor} />
                        </View>
                    ) : null}
                    onPressLeftIcon={handleDown}
                    onPressIcon={handleUp}
                    placeholderTextColor={Colors[theme]?.textColorOpacity30}
                    contextMenuHidden
                    onBlur={onBlur}
                />
            </View>
        )
    }

    return (
        <Input
            ref={_inputRef}
            keyboardType='numeric'
            {...props}
            inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
            inputStyle={[{ textAlign: 'center' }, inputStyle, { fontSize }]}
            onChangeText={handleChangeText}
            isBottomSheet={isBottomSheet}
            placeholderTextColor={Colors[theme]?.textColorOpacity30}
            contextMenuHidden
            onBlur={onBlur}
        />
    )
};

export default React.memo(forwardRef(InputNumber));

const myStyles = (theme) => StyleSheet.create({
    buttonUpDown: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        paddingRight: 0,
    },
    selectPair: {
        borderTopColor: Colors[theme].textColorOpacity10,
        borderTopWidth: scales(1),
        borderLeftColor: Colors[theme].textColorOpacity10,
        borderLeftWidth: scales(1),
        borderRightColor: Colors[theme].textColorOpacity10,
        borderRightWidth: scales(1),
        flexDirection: 'row',
        marginTop: scales(10),
        borderTopLeftRadius: scales(4),
        borderTopRightRadius: scales(4),
        height: scales(20),
    },
    buttonCurrency: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    col: {
        borderRightWidth: scales(1),
        borderColor: Colors[theme].textColorOpacity10,
    },
    textCurrency: {
        ...Fonts.segoe600,
        fontSize: scales(11),
        textAlign: 'center',
        color: Colors[theme].textColorOpacity30,
    },
    textBlack: {
        color: Colors[theme].textColor,
    },
});

