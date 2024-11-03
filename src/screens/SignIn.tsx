import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '../lib/tailwind';
import Input from '../components/Input';
// import {Mail} from 'react-native-feather';
import AuthNavigatorLine from '../components/AuthNavigatorLine';
import {handleSetToken, isValidEmail} from '../lib/utils';
import Toast from 'react-native-toast-message';
import AuthButton from '../components/buttons/AuthButton';
import {useMutation} from '@tanstack/react-query';
import {URL_STRING} from '../lib/constants';
import {Mail} from 'react-native-feather';

function SignIn() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('cityslicka');
  const [userData, setUserData] = useState();
  const [checked, setChecked] = useState<boolean>(false);

  const {mutate: handleLogin, data} = useMutation({
    mutationFn: () =>
      fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(res => {
          handleSetToken(res);
          handleSetState(res);
          console.log({res});
          return res;
        }),
    onError: () => {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Your request Failed.',
      });
    },
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: 'You are Authenticated',
      });
    },
  });

  const handleSetState = (user: any) => {
    setUserData(user);
  };

  const handlePressSignIn = () => {
    if (isValidEmail(email) && password.length >= 6) {
      handleLogin();
    } else {
      setError('Please Enter a Valid Email & Password should be');
      Toast.show({
        type: 'error',
        text1: 'Auth Failed',
        text2: 'Please Enter a Valid Email & Password should be of length 8',
      });
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View
        style={tw`bg-gray-light mx-5 p-5 rounded-xl min-h-100 justify-between pt-10`}>
        <View>
          <Text style={tw`text-black text-3xl font-bold`}>Login</Text>
          <Text style={tw`text-black text-base font-light	mt-3`}>
            Please Sign in to continue
          </Text>

          <View style={tw`mt-3`}>
            <Input
              placeholder="Enter Email"
              value={email}
              onChangeText={val => setEmail(val)}
              InputSvg={Mail}
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={val => setPassword(val)}
              secureTextEntry
            />
          </View>

          <View style={tw`flex-row justify-between my-5`}>
            <View>
              <Pressable onPress={() => {}} style={{}}></Pressable>
              <Text>Remember me</Text>
            </View>

            <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
              <Text style={tw`text-black`}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <AuthButton CTA={'Sign In'} handlePress={handlePressSignIn} />

        <AuthNavigatorLine
          assertion="Don't have an Account ?"
          navigatorText="Sign Up Here!"
          navigateTo="SignUp"
        />
      </View>
    </View>
  );
}

export default SignIn;
