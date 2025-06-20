import {Image, Pressable, Text, TextInput, View} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function LoginPage() {

    const navigation = useNavigation()
  return (
    <View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/mainLogo.png')}
        />{' '}
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login!!</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
          <TextInput placeholder="Mobile pr Email"placeholderTextColor="#999"  style={styles.textInput} />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
          <TextInput placeholder="Password"placeholderTextColor="#999"  style={styles.textInput} />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <Text style={{color: '#420475', fontWeight: '700'}}>
            {' '}
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <Pressable style={styles.inBut}>
          <View>
            <Text style={styles.textSign}>Log in</Text>
          </View>
        </Pressable>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
            ----Or Continue as----
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable style={styles.inBut2}>
              <FontAwesome
                name="user-circle-o"
                color="white"
                style={styles.smallIcon2}
              />
            </Pressable>
            <Text style={styles.bottomText}>Guest</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={styles.inBut2}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <FontAwesome
                name="user-plus"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </Pressable>
            <Text style={styles.bottomText}>Sign Up</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={styles.inBut2}
              onPress={() => alert('Coming Soon')}>
              <FontAwesome
                name="google"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </Pressable>
            <Text style={styles.bottomText}>Google</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable
              style={styles.inBut2}
              onPress={() => alert('Coming Soon')}>
              <FontAwesome
                name="facebook-f"
                color="white"
                style={[styles.smallIcon2, {fontSize: 30}]}
              />
            </Pressable>
            <Text style={styles.bottomText}>Facebook</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginPage;
