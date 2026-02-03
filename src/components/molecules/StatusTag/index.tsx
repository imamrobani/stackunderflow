import React from 'react';
import { View, Text } from '@components/atoms';
import { Colors, Statuses } from '@constants';
import { EventStatus } from '@type/models/common';
import styles from './styles';

interface StatusTagProps {
  status?: EventStatus;
}

const StatusTag: React.FC<StatusTagProps> = ({ status = 'posted' }) => {
  const getStatusColor = (value: EventStatus) => {
    switch (value) {
      case Statuses.POSTED:
        return {
          backgroundColor: Colors.PRIMARY_SURFACE,
          borderColor: Colors.PRIMARY_BORDER,
          textColor: Colors.PRIMARY_MAIN,
        };
      case Statuses.ONGOING:
        return {
          backgroundColor: Colors.WARNING_SURFACE,
          borderColor: Colors.WARNING_BORDER,
          textColor: Colors.WARNING_MAIN,
        };
      case Statuses.FINISHED:
        return {
          backgroundColor: Colors.SUCCESS_SURFACE,
          borderColor: Colors.SUCCESS_BORDER,
          textColor: Colors.SUCCESS_MAIN,
        };
      default:
        return {
          backgroundColor: Colors.PRIMARY_SURFACE,
          borderColor: Colors.PRIMARY_BORDER,
          textColor: Colors.PRIMARY_MAIN,
        };
    }
  };

  return (
    <View
      style={styles.container}
      backgroundColor={getStatusColor(status).backgroundColor}
      borderColor={getStatusColor(status).borderColor}>
      <Text
        type="buttonSMedium"
        color={getStatusColor(status).textColor}
        textTransform="capitalize">
        {status}
      </Text>
    </View>
  );
};

export default StatusTag;
