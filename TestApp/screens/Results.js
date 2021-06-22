import 'react-native-gesture-handler';
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

export const Results = ({ navigation, route }) => {
    const { ext, neur, lies} = route.params;
    let isExtraveted, isNeurotick, isLiar;
    ext > 6? isExtraveted = true: isExtraveted = false;
    neur > 7? isNeurotick = true: isNeurotick = false;
    lies > 2? isLiar = true: isLiar = false;
    
    if (isLiar){
        return (
            <View style={styles.container}>
              <View style={styles.card}>
                <View style={styles.title}>
                  <Text style={styles.question}>Попробуйте пройти заново</Text>
                  <Text style={styles.description}>Мы заметили неискренность в ответах, свидетельствующая также о некоторой демонстративности поведения и ориентированности вас на социальное одобрение</Text>
                </View>
                <TouchableOpacity
                  style={styles.home}
                  onPress={() => {
                    navigation.popToTop({
                      ext: 0,
                      neur:0,
                      lies:0
                    })
                  }}
                >
                  <Text style={styles.homeText}>На главную</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
    }
    if (isExtraveted && isNeurotick) {
        return (
            <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.title}>
                <Text style={styles.question}>Вы холерик</Text>
                <Text style={styles.description}>Холерик отличается повышенной возбудимостью, действия прерывисты. Ему свойственны резкость и стремительность движений, сила, импульсивность, яркая выраженность эмоциональных переживаний. Вследствие неуравновешенности, увлекшись делом, склонен действовать изо всех сил, истощаться больше, чем следует.</Text>
                </View>
                <TouchableOpacity
                style={styles.home}
                onPress={() => {
                    navigation.popToTop({
                    ext: 0,
                    neur:0,
                    lies:0
                    })
                }}
                >
                <Text style={styles.homeText}>На главную</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
    else if (isExtraveted && !isNeurotick) {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.title}>
            <Text style={styles.question}>Вы сангвиник</Text>
            <Text style={styles.description}>Сангвиник быстро приспосабливается к новым условиям, быстро сходится с людьми, общителен. Чувства легко возникают и сменяются, эмоциональные переживания, как правило, неглубоки. Мимика богатая, подвижная, выразительная. Несколько непоседлив, нуждается в новых впечатлениях.</Text>
            </View>
            <TouchableOpacity
            style={styles.home}
            onPress={() => {
                navigation.popToTop({
                ext: 0,
                neur:0,
                lies:0
                })
            }}
            >
            <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }
    else if (!isExtraveted && isNeurotick) {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.title}>
            <Text style={styles.question}>Вы меланхолик</Text>
            <Text style={styles.description}>У него реакция часто не соответствует силе раздражителя, присутствует глубина и устойчивость чувств при слабом их выражении. Ему трудно долго на чем-то сосредоточиться. Ему свойственны сдержанность и приглушенность моторики и речи, застенчивость, робость, нерешительность. В нормальных условиях меланхолик — человек глубокий, содержательный, может успешно справляться с жизненными задачами.</Text>
            </View>
            <TouchableOpacity
            style={styles.home}
            onPress={() => {
                navigation.popToTop({
                ext: 0,
                neur:0,
                lies:0
                })
            }}
            >
            <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }
    else {
    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <View style={styles.title}>
            <Text style={styles.question}>Вы флегматик</Text>
            <Text style={styles.description}>Флегматик характеризуется сравнительно низким уровнем активности поведения, новые формы которого вырабатываются медленно, но являются стойкими. Обладает медлительностью и спокойствием в действиях, мимике и речи, ровностью, постоянством, глубиной чувств и настроений. Настойчивый и упорный, он редко выходит из себя, доводит дело до конца, ровен в отношениях, в меру общителен.</Text>
            </View>
            <TouchableOpacity
            style={styles.home}
            onPress={() => {
                navigation.popToTop({
                ext: 0,
                neur:0,
                lies:0
                })
            }}
            >
            <Text style={styles.homeText}>На главную</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
    }
  }