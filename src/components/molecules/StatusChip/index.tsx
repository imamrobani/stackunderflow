import React from 'react';
import { Text, View } from '@components/atoms';
import { QuestionStatus } from '@type/models/question';
import { getStatusColor } from '@utils';
import styles from './styles';

interface StatusChipProps {
  status: QuestionStatus;
}

const StatusChip = ({ status }: StatusChipProps) => {
  const statusColor = getStatusColor(status);

  return (
    <View backgroundColor={statusColor + '20'} style={styles.statusContainer}>
      <Text type="captionRegular" color={statusColor}>
        {status.toUpperCase()}
      </Text>
    </View>
  );
};

export default StatusChip;
