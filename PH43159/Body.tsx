import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const Body = ({ onSubmit, onChangeColor, onAvatarChange }: { onSubmit: (name: string) => void; onChangeColor: () => void;  onAvatarChange: (name: string, avatarUrl: string) => void }) => {
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const handleUpdate = () => {
        onSubmit(name);
        onAvatarChange(name, avatarUrl);
    };

    const handleColorChange = () => {
        onChangeColor();
    };

    const handleAvatarChange = (text: string) => {
        setAvatarUrl(text);
    };

    return (
        <View>
            <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Họ và tên"
            />

            <TextInput
                onChangeText={handleAvatarChange}
                value={avatarUrl}
                placeholder="Link ảnh"
                style={{marginBottom: 10}}
            />

            <Button title="Cập nhật thông tin" onPress={handleUpdate} />
            <View style={{ marginTop: 20 }}>
                <Button title="Cập nhật thời gian" onPress={handleColorChange} />
            </View>
        </View>
    );
};

export default Body;

const styles = StyleSheet.create({

});
