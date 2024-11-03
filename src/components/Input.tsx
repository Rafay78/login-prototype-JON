import React, {Component, ComponentType, useState} from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import tw from '../lib/tailwind';
import {Eye} from 'react-native-feather';
import {EyeOff} from 'react-native-feather';
import {useDeviceContext} from 'twrnc';
import {Plus} from '../assets/images/svgs';

type inputPropsType = {
  InputSvg?: ComponentType;
  errorMsg?: string;
} & TextInputProps;

function Input(props: inputPropsType) {
  const {InputSvg, errorMsg, ...rest} = props;
  useDeviceContext(tw);
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View
        style={[
          tw`border-b border-gray my-3 rounded flex-row items-center justify-between px-2`,
          isFocused && tw``,
        ]}>
        <TextInput
          style={[tw`text-black w-9/10`]}
          {...rest}
          secureTextEntry={rest.secureTextEntry ? !visible : visible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {InputSvg ? (
          <InputSvg fill="#d3dce6" stroke={'#000'} />
        ) : rest.secureTextEntry ? (
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}>
            {!visible ? (
              <Eye fill="#000" stroke={'#d3dce6'} />
            ) : (
              <EyeOff fill="#d3dce6" stroke={'#000'} />
            )}
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
      <Text style={tw`text-red-600 ${errorMsg ? 'flex' : 'hidden'} text-xs`}>
        {errorMsg}
      </Text>
    </>
  );
}

export default Input;
