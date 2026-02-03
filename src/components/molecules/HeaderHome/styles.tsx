import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  iconContainer: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(32 / 2),
    backgroundColor: Colors.PRIMARY_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
