import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// 소셜 로그인 컴포넌트
const SocialLogin = () => {
  // 실제 앱에서는 assets 폴더에 아이콘 이미지를 저장해야 합니다
  // 아래 경로는 예시입니다
  const naverIcon = require('../assets/icons/social_naver.icon.png');
  const kakaoIcon = require('../assets/icons/social_kakao_icon.png');
  const googleIcon = require('../assets/icons/social_google_icon.png');

  return (
    <View style={styles.container}>
      {/* 구분선 */}
      <View style={styles.socialHeader}>
        <View style={styles.line} />
        <Text style={styles.socialTitle}>간편 로그인</Text>
        <View style={styles.line} />
      </View>

      {/* 소셜 로그인 버튼 영역 */}
      <View style={styles.socialList}>
        <TouchableOpacity style={[styles.socialButton, styles.naverButton]}>
          <Image source={naverIcon} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>네이버 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.kakaoButton]}>
          <Image source={kakaoIcon} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>카카오 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
          <Image source={googleIcon} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>구글 로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  socialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  socialTitle: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#888',
  },
  socialList: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  naverButton: {
    backgroundColor: '#03C75A',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  googleButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default SocialLogin;