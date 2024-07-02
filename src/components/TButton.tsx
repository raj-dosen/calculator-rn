import React from 'react';
import {Button, Icon, IconButton} from 'native-base';
import {ButtonProps} from '../types/ButtonProps';

const TButton = ({title, onPress, type}: ButtonProps) => {
  // const {primaryBgColor, primaryTextColor} = useColors();
  return type === 'text' ? (
    <Button
      borderRadius={'10px'}
      _light={{ 
        bg: 'white', 
        _text: { color: 'black' },
        _pressed: { bg: 'gray.300' }  // Pressed state for light mode
      }}
      _dark={{ 
        bg: 'muted.600', 
        _text: { color: 'white' },
        _pressed: { bg: 'muted.400' } // Pressed state for dark mode
      }}
      _text={{
        fontSize: '3xl',
      }}
      flex={1}
      
      {...{onPress}}>
      {title}
    </Button>
  ) : (
    <IconButton
      borderRadius={'10px'}
      _light={{ 
        bg: 'white', 
        _icon: { color: 'black' },
        _pressed: { bg: 'gray.300' }  // Pressed state for light mode
      }}
      _dark={{ 
        bg: 'muted.600', 
        _icon: { color: 'white' },
        _pressed: { bg: 'muted.400' } // Pressed state for dark mode
      }}

      flex={1}
      {...{onPress}}
      icon={<Icon as={title} />}
    />
  );
};

export default TButton;
