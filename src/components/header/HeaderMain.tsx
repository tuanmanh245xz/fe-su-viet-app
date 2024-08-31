import Images from 'assets/images'
import Svgs from 'assets/svgs'
import { TouchableOpacity } from 'components/base'
import { navigate } from 'modules/navigation/src/utils'
import { profileSelector } from 'modules/user/src/selectors'
import React, { useEffect, useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Config from 'react-native-config'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'
import { Sizes, Fonts, Colors } from 'themes'
import scales from 'utils/scales'

interface Props {
    isHome?: boolean
}

const HeaderMain = () => {
    const user = useSelector(profileSelector)
    const [idCardPhoto, setIdCardPhoto] = useState<any>(`${Config.baseURL}/${user.photo}`);

    useEffect(() => {
        const image = `${Config.baseURL}/${user.photo}`
        setIdCardPhoto(image)
    },[user])
    

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.viewRight}>
                <TouchableOpacity onPress={()=> navigate("User")}>
                    <Image
                        source={{ uri: idCardPhoto }}
                        style={styles.image}
                        resizeMode={'stretch'}
                        onError={() => {
                            setIdCardPhoto('https://happysmile.dion.vn/happys/img/logo.png')
                        }}
                    />
                </TouchableOpacity>
                <View>
                    <Text style={styles.text1}>{`Xin chào, ${user.roleId === 1000002 ? 'tư vấn viên' : ''}`}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text2}>{user?.name}</Text>
                        {
                            user.roleId === 1000002 && 
                            <Svgs.IcTickCounselor width={scales(13)} height={scales(13)} marginLeft={scales(5)} top={scales(3)} />
                        }
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=> navigate('Notification')}>
                    <Svgs.IcNotification width={scales(30)} height={scales(30)} marginRight={scales(15)} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigate('Chat')}>
                    <Svgs.IcMessenger width={scales(30)} height={scales(30)}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HeaderMain;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: Sizes.statusBarHeight + scales(15),
        justifyContent: 'space-between',
        paddingHorizontal: scales(15),
        alignItems: 'center',
        marginBottom: scales(15),
    },
    image: {
        width: scales(30),
        height: scales(30),
        resizeMode: 'contain',
        borderRadius: scales(40),
        marginRight: scales(10),
    },
    text1: {
        ...Fonts.sfPro400,
        fontSize: scales(11),
        textAlignVertical: 'center',
        color: Colors.label
    },
    text2: {
        ...Fonts.sfPro600,
        fontSize: scales(13),
        textAlignVertical: 'center',
        color: Colors.main
    },
    viewRight: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})