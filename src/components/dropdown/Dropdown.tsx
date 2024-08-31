import React, { useState } from 'react'
import { DropdownProps } from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model'
import { Dropdown } from 'react-native-element-dropdown'
import { StyleSheet, Text, View } from 'react-native'
import scales from 'utils/scales'
import { Colors, Fonts } from 'themes'

interface Props extends DropdownProps<any> {
  value: any
  onChangeValue?: (item: any) => void
  title?: string
}

const DropdownView = (props: Props) => {
  const { value, title, onChangeValue } = props
  const [isFocus, setIsFocus] = useState(false);

  const onChange = (item) => {
    setIsFocus(false)
    onChangeValue(item)
  }

  return (
    <View style={styles.container}>
      {title && <Text style={styles.headerText}>{title}</Text>}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: Colors.button }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        searchPlaceholder="Chọn ứng dụng ..."
        maxHeight={scales(300)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        {...props}
      />
    </View>
  )
}

export default DropdownView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scales(10),
  },
  dropdown: {
    width: '100%',
    height: scales(55),
    borderColor: Colors.border,
    borderWidth: 2,
    borderRadius: scales(6),
    paddingHorizontal: scales(8),
    marginBottom: scales(10),
  },
  icon: {
    marginRight: scales(5),
  },
  labelSelect: {
    position: 'absolute',
    backgroundColor: 'white',
    left: scales(10),
    top: scales(-3),
    zIndex: 10,
    paddingHorizontal: scales(5),
    fontSize: scales(12),
  },
  placeholderStyle: {
    ...Fonts.sfPro400,
    fontSize: scales(13),
    color: Colors.black,
    paddingHorizontal: scales(5),
  },
  selectedTextStyle: {
    ...Fonts.sfPro400,
    fontSize: scales(13),
    color: Colors.black,
    paddingHorizontal: scales(5),
  },
  iconStyle: {
    width: scales(20),
    height: scales(20),
  },
  inputSearchStyle: {
    height: scales(45),
    fontSize: scales(14),
  },
  headerText: {
    ...Fonts.sfPro400,
    fontSize: scales(14),
    color: Colors.grey,
    paddingBottom: scales(5),
  },
})