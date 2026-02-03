import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { View, Text } from '@components/atoms';
import { TabItem } from '@type/models/common';
import styles from './styles';

interface TabFilterProps {
  data: TabItem[];
  onTabPress: (tab: TabItem) => void;
  initialKey?: string;
}

const TabFilter: React.FC<TabFilterProps> = ({
  data,
  onTabPress,
  initialKey,
}) => {
  const [activeTab, setActiveTab] = useState(initialKey || data[0].key);

  const handleTabPress = (tab: TabItem) => {
    setActiveTab(tab.key);
    onTabPress(tab);
  };

  return (
    <View style={styles.tabContainer}>
      {data.map((item) => (
        <Pressable
          key={item.key}
          style={[
            styles.tabItem,
            activeTab === item.key && styles.tabItemActive,
          ]}
          onPress={() => handleTabPress(item)}>
          <Text
            type={activeTab === item.key ? 'body2Medium' : 'body2Regular'}
            color={activeTab === item.key ? 'PRIMARY_MAIN' : 'NEUTRAL_50'}>
            {item.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default TabFilter;
