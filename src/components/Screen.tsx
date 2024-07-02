import { Box, Input } from 'native-base';
import React from 'react';
import { ScreenProps } from '../types/ScreenProps';
// import { useWindowDimensions } from 'react-native';

const Screen = ({ value, onChange }: ScreenProps) => {
  // const screenWidth = useWindowDimensions().width;

  return (
    <Box>
      <Input
        variant="unstyled"
        _light={{
          _text: { color: 'black' },
        }}
        _dark={{
          _text: { color: 'white' },
        }}
        isReadOnly
        fontSize={'4xl'}
        value={value}
        onChangeText={onChange}
        style={{
          textAlign:'right'
        }}
      />
    </Box>
  );
};

export default Screen;
