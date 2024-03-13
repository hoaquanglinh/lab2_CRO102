import { StatusBar, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const PH43159_bai3 = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
      <ImageBackground
        style={{ flex: 7 }}
        source={require('../Ph43159_lab5/assets/img/hoian.jpg')}>
        <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <Text style={{ marginLeft: 20, color: 'white', fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Phố cổ Hội An</Text>
          <View style={{ backgroundColor: 'white', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
            <Text style={{ paddingLeft: 20, fontSize: 25, fontWeight: 'bold', color: 'blue', }}>Quảng Nam</Text>
          </View>
        </View>
        <View style={{
          width: 60, height: 60, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', position: 'absolute', borderRadius: 100, right: 20, bottom: 0, shadowColor: 'black',
          shadowOffset: {
            width: 4,
            height: 4,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,
          elevation: 18,
        }}>
          <Image style={{ width: 40, height: 40 }} source={require('../Ph43159_lab5/assets/img/heart.png')} />
        </View>
        <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center', position: 'absolute', borderRadius: 100, right: 30, bottom: 70}}>
          <Image style={{ width: 20, height: 20 }} source={require('../Ph43159_lab5/assets/img/sao.png')} />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 5}}>5.0</Text>
        </View>
      </ImageBackground>

      <View style={{ flex: 3, paddingTop: 0, borderColor: 'white' }}>
        <Text style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 10, fontSize: 20, fontWeight: 'bold', color: 'black' }}>Thông tin chuyến đi</Text>
        <Text style={{ paddingLeft: 20, paddingRight: 20, fontSize: 17, textAlign: 'justify' }} numberOfLines={6} ellipsizeMode="tail" >Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam. Nhờ những yếu tố địa lý và khí hậu thuận lợi, Hội An từng là một thương cảng quốc tế sầm uất. Thế kỷ XIX, do giao thông đường thủy ở đây không còn thuận tiện, cảng thị Hội An dần suy thoái, nhường chỗ cho Đà Nẵng khi đó đang được người Pháp xây dựng. Hội An may mắn không bị tàn phá trong hai cuộc chiến tranh và tránh được quá trình đô thị hóa ồ ạt cuối thế kỷ 20.</Text>
        <View style={{ backgroundColor: 'blue', height: 60, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20,position: 'absolute', bottom: 0, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>$100/Ngày</Text>
          <TouchableOpacity style={{ width: 120, height: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
            <Text style={{ color: 'blue', fontSize: 18, fontWeight: "bold" }}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>

      </View>


    </View>
  )
}

export default PH43159_bai3

const styles = StyleSheet.create({})