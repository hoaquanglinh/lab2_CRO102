import { ImageBackground, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const PH43159_bai2 = () => {
    return (
        <View style={{ flex: 1}}>
            <ImageBackground style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} source={require('../Ph43159_lab5/assets/img/image.jpg')}>
                <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
                <View style={{width: 300, height: 300, justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold', marginBottom: 13}}>Discover {'\n'}world with us</Text>
                    <Text style={{color: 'white', fontSize: 18,}}>Halong Bay is a famous scenic spot in Quang Ninh province and was recognized by UNESCO in 1994</Text>
                    <TouchableOpacity style={{padding: 10, width: 120, height: 50, backgroundColor: 'white', borderRadius: 10, alignItems:'center', justifyContent:'center', marginTop: 20}}>
                        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Get started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default PH43159_bai2

const styles = StyleSheet.create({})