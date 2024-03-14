import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = ({ info, color }: { info: string; color: string }) => {
    return (
        <View style={{padding: 10,
            alignItems: 'center',
            backgroundColor: `${color}`,
            justifyContent: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian ban cập nhật thông tin: {info}</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    
});
