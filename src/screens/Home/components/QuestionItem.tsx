import React from 'react';
import { Pressable } from 'react-native';
import { StatusChip, Text, View } from '@components';
import { Question } from '@type/models/question';
import { convertDate } from '@utils/dates';
import styles from './styles';

interface QuestionItemProps {
  item: Question;
  onPress: (item: Question) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ item, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={() => onPress(item)}>
      <View style={styles.header}>
        <View flex={1}>
          <Text type="subtitle2Medium" color="PRIMARY_MAIN" numberOfLines={2}>
            {item.title}
          </Text>
        </View>
        <StatusChip status={item.status} />
      </View>

      <Text type="body2Regular" color="NEUTRAL_70" numberOfLines={3}>
        {item.description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.metaInfo}>
          <Text type="captionRegular" color="NEUTRAL_50">
            {item.authorName}
          </Text>
          <Text type="captionRegular" color="NEUTRAL_50">
            •
          </Text>
          <Text type="captionRegular" color="NEUTRAL_50">
            {convertDate(item.createdAt, 'DD MMM YYYY')}
          </Text>
        </View>

        <View style={styles.metaInfo}>
          <Text type="captionRegular" color="NEUTRAL_60">
            {item.comments.length} answers
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default QuestionItem;
