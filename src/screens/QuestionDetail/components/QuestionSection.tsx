import React from 'react';
import { View, Text, StatusChip } from '@components';
import { Colors } from '@constants';
import { Question } from '@type/models/question';
import { convertDate } from '@utils/dates';
import styles from './styles';

interface QuestionSectionProps {
  question: Question;
}

const QuestionSection: React.FC<QuestionSectionProps> = ({ question }) => {
  return (
    <View style={styles.questionContainer}>
      <View style={styles.questionHeader}>
        <View flex={1}>
          <Text type="headingS" color="NEUTRAL_90">
            {question.title}
          </Text>
        </View>
        <StatusChip status={question.status} />
      </View>

      <View style={styles.metaInfo}>
        <Text type="captionRegular" color="NEUTRAL_50">
          Asked by {question.authorName}
        </Text>
        <Text type="captionRegular" color="NEUTRAL_50">
          •
        </Text>
        <Text type="captionRegular" color="NEUTRAL_50">
          {convertDate(question.createdAt, 'DD MMM YYYY HH:mm')}
        </Text>
      </View>

      <View
        height={1}
        width={'100%'}
        backgroundColor={Colors.NEUTRAL_20}
        marginVertical={12}
      />

      <Text type="body1Regular" color="NEUTRAL_80">
        {question.description}
      </Text>
    </View>
  );
};

export default QuestionSection;
