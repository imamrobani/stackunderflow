import React from 'react';
import { Button, View } from '@components';

interface AuthorActionsProps {
  onEdit: () => void;
  onChangeStatus: () => void;
}

const AuthorActions: React.FC<AuthorActionsProps> = ({
  onEdit,
  onChangeStatus,
}) => {
  return (
    <View
      row
      justifyContent="flex-end"
      alignItems="center"
      marginBottom={16}
      gap={8}>
      <Button
        label="Change Status"
        width={120}
        height={36}
        typeText="buttonSRegular"
        buttonColor="PRIMARY_MAIN"
        labelColor="NEUTRAL_10"
        onPress={onChangeStatus}
      />
      <Button
        label="Edit Question"
        width={110}
        height={36}
        typeText="buttonSRegular"
        buttonColor="NEUTRAL_20"
        labelColor="NEUTRAL_90"
        onPress={onEdit}
      />
    </View>
  );
};

export default AuthorActions;
