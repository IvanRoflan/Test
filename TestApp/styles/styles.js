import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2e9e4',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    card: {
      width: '95%',
      height: '80%',
      backgroundColor: '#c9ada7',
      borderRadius: 20,
    },
    title: {
      height: '70%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    question: {
      color: '#22223b',
      fontSize: 33,
      fontWeight: '700',
      textAlign: 'center'
    },
    description: {
      color: '#22223b',
      fontSize: 22,
      paddingTop: 5,
      textAlign: 'center'
    },
    btns: {
      height: "30%",
      backgroundColor: '#f77f00',
      flexDirection: 'row',
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20
    },
    home: {
      height: "30%",
      backgroundColor: '#f77f00',
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeText: {
      color: '#fff',
      fontSize: 25,
      fontWeight: '700'
    },
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700'
    }
  });