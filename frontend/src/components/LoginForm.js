import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import { CheckBox } from 'react-native-elements'; // 체크박스를 위한 라이브러리 필요
import SocialLogin from './SocialLogin';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // 이메일과 비밀번호 값이 변경될 때마다 버튼 활성화 여부 검사
  useEffect(() => {
    const isEmailValid = email.trim() !== '';
    const isPasswordValid = password.length >= 8;
    setIsButtonEnabled(isEmailValid && isPasswordValid);
  }, [email, password]);

  // 이메일 입력값 삭제
  const handleEmailClear = () => {
    setEmail('');
  };

  // 비밀번호 입력값 삭제
  const handlePasswordClear = () => {
    setPassword('');
  };

  // 비밀번호 보이기/숨기기 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 폼 제출 핸들러
  const handleSubmit = () => {
    // 여기에 로그인 로직 추가
    console.log('로그인 시도:', { email, password });
  };

  return (
    <View style={styles.container}>
      {/* 이메일 입력 */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="이메일"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {email !== '' && (
          <TouchableOpacity style={styles.clearButton} onPress={handleEmailClear}>
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* 비밀번호 입력 */}
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          placeholder="8~15자리 영문+숫자+특수문자 조합"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
          <Text>{showPassword ? '👁️‍🗨️' : '👁️'}</Text>
        </TouchableOpacity>
        {password !== '' && (
          <TouchableOpacity style={styles.clearButton} onPress={handlePasswordClear}>
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* 옵션 영역 */}
      <View style={styles.actionsContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            containerStyle={styles.checkbox}
            title="로그인 상태 유지"
            textStyle={styles.checkboxText}
          />
        </View>
        <View style={styles.linksContainer}>
          <TouchableOpacity>
            <Text style={styles.link}>계정 찾기</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity>
            <Text style={styles.link}>비밀번호 찾기</Text>
          </TouchableOpacity>
          <Text style={styles.separator}>|</Text>
          <TouchableOpacity>
            <Text style={styles.link}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity
        style={[styles.loginButton, !isButtonEnabled && styles.loginButtonDisabled]}
        onPress={handleSubmit}
        disabled={!isButtonEnabled}
      >
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      {/* 소셜 로그인 */}
      <SocialLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  clearButton: {
    padding: 10,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#999',
  },
  eyeButton: {
    padding: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: 'normal',
    marginLeft: 5,
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 5,
  },
  separator: {
    color: '#ddd',
  },
  loginButton: {
    backgroundColor: '#0066FF',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonDisabled: {
    opacity: 0.3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginForm;