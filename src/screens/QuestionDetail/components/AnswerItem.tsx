import React from 'react';
import { Pressable } from 'react-native';
import { Text, View } from '@components';
import { Comment } from '@type/models/question';
import { convertDate } from '@utils/dates';
import styles from '../styles';

interface AnswerItemProps {
  comment: Comment;
  currentUserId?: string;
  onEdit: (comment: Comment) => void;
}

const AnswerItem: React.FC<AnswerItemProps> = ({
  comment,
  currentUserId,
  onEdit,
}) => {
  return (
    <View gap={8} style={styles.commentItem}>
      <View row justifyContent="space-between" alignItems="center">
        <Text type="body2Regular" color="NEUTRAL_70">
          {comment.content}
        </Text>
      </View>
      <View row justifyContent="space-between" alignItems="center">
        <Text type="captionRegular" color="NEUTRAL_50">
          {comment.authorName}
        </Text>
        <View row gap={8}>
          <Text type="captionRegular" color="NEUTRAL_50">
            {convertDate(comment.createdAt, 'DD MMM YYYY HH:mm')}
          </Text>
          {currentUserId === comment.authorId && (
            <Pressable onPress={() => onEdit(comment)}>
              <Text type="captionSemiBold" color="PRIMARY_MAIN">
                Edit
              </Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default AnswerItem;
