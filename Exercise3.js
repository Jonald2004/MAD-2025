//1. import core component react-native
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//2. Buat component
//   component adalah function yg return jsx
const Exercise3 = () => {
  return (
    //jsx
    <>
      <View>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.subTitle}>Username</Text>
        <TextInput style={styles.input} placeholder="Masukan username anda" />
        <Text style={styles.subTitle}>Password</Text>
        <TextInput style={styles.input} placeholder="Masukan password anda" />
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
//3. export component
export default Exercise3;

//4. Styling
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '800',
    marginBottom: 50,
    color: 'black',
  },
  subTitle: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: '400',
    marginBottom: -10,
    color: 'black',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    fontSize: 20,
    borderRadius: 15,
    padding: 8,
  },
  button: {
    backgroundColor: 'orange',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
