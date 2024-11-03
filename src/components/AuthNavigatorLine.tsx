import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from '../lib/tailwind';

type LineTypes = {
  assertion: string;
  navigatorText: string;
  navigateTo?: string;
};

function AuthNavigatorLine(props: LineTypes) {
  const {navigatorText, assertion, navigateTo} = props;
  return (
    <View style={tw`flex-row justify-center`}>
      <Text style={tw`text-black text-sm`}>{assertion} </Text>

      <TouchableOpacity>
        <Text style={tw`underline text-black text-sm`}>{navigatorText}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AuthNavigatorLine;
