import React, { forwardRef} from 'react';
import { StyleSheet,Image, Text, View } from 'react-native';
import Images from 'assets/images';
import { TouchableOpacity } from 'components/base';
import { Colors, Fonts } from 'themes';
import scales from 'utils/scales';

export interface InputRefType {
    focusInput: () => void;
}

const InputBackground = () => {
    const styles = myStyles();

    return (
        <View>
            <Text style={styles.textHeaderSearch}>Gợi ý tìm kiếm:</Text>
            <Image
                style={styles.customBackground}
                source={Images.HEALTH_FACILITICES_BACKGROUND}
            />
            <View style={styles.addressDefault}>
                <TouchableOpacity style={styles.itemInfo}>
                    <Text style={styles.addressName} numberOfLines={1}>Chủ đề 1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemInfo}>
                    <Text style={styles.addressName} numberOfLines={1}>Chủ đề 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.itemInfo}>
                    <Text style={styles.addressName} numberOfLines={1}>Chủ đề 3</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default forwardRef(InputBackground);

const myStyles = () => StyleSheet.create({
    textHeaderSearch: {
        ...Fonts.sfPro400,
        fontSize: scales(13),
        textAlign: 'center',
        paddingTop: scales(10),
        position: 'absolute',
        width: '100%',
        color: Colors.label,
    },
    customBackground: {
        height: scales(110),
        width: '100%',
        resizeMode: 'stretch',
    },
    addressDefault: {
        flexDirection: 'row',
        paddingTop: scales(15),
        position: 'absolute',
        top: scales(30),
        alignSelf: 'center'
    },
    itemInfo: {
        marginRight: scales(10),
        backgroundColor: Colors.border,
        borderRadius: scales(12)
    },
    addressName: {
        ...Fonts.sfPro400,
        maxWidth: scales(120),
        paddingHorizontal: scales(10),
        paddingVertical: scales(5),
        color: Colors.text,
        fontSize: scales(13)
    },

});
