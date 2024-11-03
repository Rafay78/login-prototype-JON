import AsyncStorage from '@react-native-async-storage/async-storage';

export function isValidEmail(email: string) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('Token retrieved:', token);
      return token;
    } else {
      console.log('No token found');
    }
  } catch (error) {
    console.log('Error retrieving token:', error);
  }
};

export const handleSetToken = async (response: any) => {
  try {
    // Assuming 'response' contains the access token
    const {token} = response;

    // Store the token in AsyncStorage
    await AsyncStorage.setItem('token', token);
    console.log('Token stored successfully');
  } catch (error) {
    console.log('Error storing the token:', error);
  }
};
