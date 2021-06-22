import 'react-native-gesture-handler';
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export const StartScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.title}>
            <Text style={styles.question}>Тест Айзенка</Text>
            <Text style={styles.description}>Данный тест поможет вам узнать свой темперамент</Text>
            </View>
            <TouchableOpacity
            style={styles.home}
            onPress={() => {
                navigation.navigate('Q1', {
                ext: 0,
                neur:0,
                lies:0
                })
            }}
            >
            <Text style={styles.homeText}>НАЧАТЬ</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}
    