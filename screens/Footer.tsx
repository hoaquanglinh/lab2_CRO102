import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = ({ info }: { info: string; }) => {
    return (
        <View style={styles.footerContainer}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Thời gian ban cập nhật thông tin: {info}</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'cyan',
        justifyContent: 'center'
    },
});
