import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginWrap}>
        {/* 로고 영역 */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>EPIK</Text>
        </View>

        {/* 로그인 폼 */}
        <LoginForm />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginWrap: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0066FF',
  },
});

export default Login;