import { Box, HStack, VStack } from 'native-base';
import React, { Children, useState } from 'react';
import Screen from './components/Screen';
import TButton from './components/TButton';
import { useUtilities } from './hooks/useUtilities';
import { ButtonProps } from './types/ButtonProps';
import AndDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native';

const Main = () => {
  const [value, setValue] = useState('');

  const {
    handleScreenChange,
    handleButtonPress,
    handleEvaluate,
    clearScreen,
    handleDelete,
  } = useUtilities(setValue, value);

  const buttons = [
    [
      {
        type: 'icon',
        title: <Icon as={AndDesign} name={'poweroff'} />,
        onPress: clearScreen,
      },
      { type: 'text', title: '%', onPress: handleButtonPress('%') },
      {
        type: 'icon',
        title: <Icon as={Ionicons} name={'backspace'} />,
        onPress: handleDelete,
      },
    ],
    [
      { type: 'text', title: '1', onPress: handleButtonPress('1') },
      { type: 'text', title: '2', onPress: handleButtonPress('2') },
      { type: 'text', title: '3', onPress: handleButtonPress('3') },
      { type: 'text', title: '+', onPress: handleButtonPress('+') },
    ],
    [
      { type: 'text', title: '4', onPress: handleButtonPress('4') },
      { type: 'text', title: '5', onPress: handleButtonPress('5') },
      { type: 'text', title: '6', onPress: handleButtonPress('6') },
      { type: 'text', title: '-', onPress: handleButtonPress('-') },
    ],
    [
      { type: 'text', title: '7', onPress: handleButtonPress('7') },
      { type: 'text', title: '8', onPress: handleButtonPress('8') },
      { type: 'text', title: '9', onPress: handleButtonPress('9') },
      { type: 'text', title: 'x', onPress: handleButtonPress('*') },
    ],
    [
      // { type: 'text', title: '00', onPress: handleButtonPress('00') },
      { type: 'text', title: '0', onPress: handleButtonPress('0') },
      { type: 'text', title: '.', onPress: handleButtonPress('.') },
      { type: 'text', title: '=', onPress: handleEvaluate },
      { type: 'text', title: '/', onPress: handleButtonPress('/') },
    ],
  ];

  return (
    <Box
      safeArea
      w={'full'}
      flex={1}
      _light={{ bg: '#F7F7F7' }}
      _dark={{ bg: 'black' }}
    >
      <Box position={'absolute'} w={'full'} bottom={'0'} px={5}>
        <Screen value={value} onChange={handleScreenChange} />
        <VStack mt={4} space={4}>
          {Children.toArray(
            buttons.map(row => (
              <HStack space={4}>
                {Children.toArray(
                  row.map((btn: ButtonProps) => {
                    const { title, onPress, type } = btn;
                    return (
                      <TButton title={title} onPress={onPress} type={type} />
                    );
                  }),
                )}
              </HStack>
            )),
          )}
        </VStack>

        <VStack mt={5} pb={'20px'} direction={'row'} space={10} justifyContent={'center'}>
          {/* <TouchableOpacity>
            <Icon size={'5'} as={AndDesign} name={'instagram'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon size={'5'} as={AndDesign} name={'linkedin-square'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon color={'red.500'} size={'5'} as={AndDesign} name={'github'} />
          </TouchableOpacity> */}
        </VStack>
      </Box>
    </Box>
  );
};

export default Main;
