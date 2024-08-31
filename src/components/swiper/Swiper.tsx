import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { Colors } from 'themes'
import scales from 'utils/scales'

interface Props{
    images: string[]
}

export const SwiperImages = (props: Props) => {
    const { images } = props
    return(
        <Swiper
            key={images.length}
            autoplay
            removeClippedSubviews={false}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dot}
            paginationStyle={styles.pagination}
            >
            {images.map((item, index) => (
                <Image source={{uri:`${item}` }} style={{flex:1}} key={index}></Image>
            ))}
        </Swiper>
    )
}

const styles = StyleSheet.create({
    activeDot: {
        width: scales(50),
       height: scales(1.7),
        backgroundColor: Colors.text
    },
    dot: {
        width: scales(7),
        height: scales(1.7),
        backgroundColor: Colors.text
    },
    pagination:{
        position: 'absolute',
        bottom: scales(5)
    },
    image: {
        flex: 1,
    }
})