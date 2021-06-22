import 'react-native-gesture-handler';
import React from "react";
import {Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../styles/styles';

export const QuestionCard = ({question, onPressYes, onPressNo}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.title}>
                    <Text style={styles.question}>{question}</Text>
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={onPressYes}
                    >
                    <Text style={styles.buttonText}>Да</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={onPressNo}
                    >
                    <Text style={styles.buttonText}>Нет</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    );
}
