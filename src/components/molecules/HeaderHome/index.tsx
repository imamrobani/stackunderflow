import React from 'react';

import { Pressable } from 'react-native';
import { Icons } from '@assets';
import { Text, View } from '@components/atoms';
import styles from './styles';

interface HeaderHomeProps {
  name: string;
  onPressNotification?: () => void;
}

const HeaderHome: React.FC<HeaderHomeProps> = ({
  name,
  onPressNotification,
}) => {
  return (
    <View gap={8}>
      <View row justifyContent="space-between" alignItems="center">
        <Text type="subtitle1SemiBold">{'Kara\nWorks.'}</Text>
        <Pressable style={styles.iconContainer} onPress={onPressNotification}>
          <Icons.IcBell stroke={'white'} />
        </Pressable>
      </View>
      <View paddingVertical={16} gap={4}>
        <Text type="body2Regular" color="NEUTRAL_70">
          Welcome Back,
        </Text>
        <Text type="subtitle1Medium">{name}</Text>
      </View>
    </View>
  );
};

export default HeaderHome;
