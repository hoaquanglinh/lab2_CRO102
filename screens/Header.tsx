import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = ({ name, avatarUrl }: { name: string; avatarUrl: string }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Image style={{ width: 50, height: 50 }} source={avatarUrl ? {uri: avatarUrl} : require('../assets/img/user.png')} />
            <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chào ngày mới.</Text>
                <Text>Họ và tên: {name ? name : 'Chưa có tên'}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({

});
