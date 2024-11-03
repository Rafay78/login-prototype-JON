import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import tw from '../../lib/tailwind'

type btnPropsType = {
    handlePress : Function,
    CTA: string
}

function AuthButton(props:btnPropsType) {
    const {handlePress, CTA} = props
  return (
    <TouchableOpacity style={tw`bg-gray-dark p-3 mx-10 my-5 rounded-full items-center`} onPress={() => handlePress()}>
      <Text style={tw`text-white text-lg`}>{CTA}</Text>
    </TouchableOpacity>
      )
}

export default AuthButton