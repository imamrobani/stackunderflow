import React from 'react';
import { Button, Text, View } from '@components';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { clearAuth } from '@store/slice/auth/authSlice';
import styles from './styles';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(clearAuth());
  };

  return (
    <View style={styles.container}>
      <View gap={8}>
        <Text type="headingM">Hello, {user?.name || 'Guest'}!</Text>
        <Text type="body2Regular" color="NEUTRAL_70">
          {user?.email}
        </Text>
      </View>

      <Button
        label="Logout"
        onPress={handleLogout}
        buttonColor="DANGER_MAIN"
        width={200}
      />
    </View>
  );
};

export default ProfileScreen;
