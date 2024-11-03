import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SignIn from './src/screens/SignIn';
import Toast from 'react-native-toast-message';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AuthNavigatorLine from './src/components/AuthNavigatorLine';
import Input from './src/components/Input';
import AuthButton from './src/components/buttons/AuthButton';
import tw from './src/lib/tailwind';

const queryClient = new QueryClient({});

function App() {
  const [email, setEmail] = useState('rafay@gmail.com');
  const [password, setPassword] = useState('string');
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SignIn />
        <Toast />
      </QueryClientProvider>
    </>
  );
}

export default App;
