import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PH43159_bai1 = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{flex: 1}}>
        <Text style={styles.text}>
          Ông Hai là một người nông dân sống ở làng Chợ Dầu, do chiến tranh nên ông phải đi tản cư. Ở nơi tản cư, ông luôn tự hào về cái làng của mình và mang nó khoe với mọi người. Khi tin làng Chợ Dầu theo giặc, ông sững sờ, cổ ông nghẹn ắng lại, da mặt tê rân rân, xấu hổ tới mức cứ cúi gằm mặt xuống mà đi. Suốt mấy ngày ở nhà, ông chẳng dám đi đâu, mang nỗi ám ảnh nặng nề, đau đớn, tủi hổ, bế tắc, tuyệt vọng. Tâm trạng ông bế tắc khi mụ chủ nhà nói sẽ đuổi hết người làng Chợ Dầu khỏi nơi sơ tán. Rồi cái tin cải chính khiến ông sung sướng đi khoe về làng mình với tâm trạng như lúc ban đầu, ông hạnh phúc khi khoe Tây nó đốt nhà mình.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.text, {fontFamily: 'GrapeNuts-Regular'}]}>
          Ông Hai là một người nông dân sống ở làng Chợ Dầu, do chiến tranh nên ông phải đi tản cư. Ở nơi tản cư, ông luôn tự hào về cái làng của mình và mang nó khoe với mọi người. Khi tin làng Chợ Dầu theo giặc, ông sững sờ, cổ ông nghẹn ắng lại, da mặt tê rân rân, xấu hổ tới mức cứ cúi gằm mặt xuống mà đi. Suốt mấy ngày ở nhà, ông chẳng dám đi đâu, mang nỗi ám ảnh nặng nề, đau đớn, tủi hổ, bế tắc, tuyệt vọng. Tâm trạng ông bế tắc khi mụ chủ nhà nói sẽ đuổi hết người làng Chợ Dầu khỏi nơi sơ tán. Rồi cái tin cải chính khiến ông sung sướng đi khoe về làng mình với tâm trạng như lúc ban đầu, ông hạnh phúc khi khoe Tây nó đốt nhà mình.
        </Text>
      </View>
    </View>
  )
}

export default PH43159_bai1

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'black'
  }
})