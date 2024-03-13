import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Main = () => {
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [footerColor, setFooterColor] = useState('white');
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    const handleSubmit = (newName: string) => {
        setName(newName);
    };

    const updateTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
        updateFooterColor();
    };

    const handleChangeFooterColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setFooterColor(randomColor);
        updateTime();
    };

    const updateFooterColor = () => {
        setFooterColor(prevColor => prevColor);
    };

    const handleAvatarChange = (newName: string, newAvatarUrl: string) => {
        setName(newName);
        setAvatarUrl(newAvatarUrl);
    };

    return (
        <View style={{flex: 1, padding: 10}}>
            <View style={{flex: 1}}>
                <Header name={name} avatarUrl={avatarUrl} />
            </View>
            <View style={{flex: 6}}>
                <Body onSubmit={handleSubmit} onChangeColor={handleChangeFooterColor} updateTime={updateTime} onAvatarChange={handleAvatarChange} />
            </View>
            <View style={{flex: 1}}>
                <Footer info={currentTime} />
            </View>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({

});
