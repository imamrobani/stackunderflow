import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.NEUTRAL_30,
    backgroundColor: Colors.WHITE,
  },
  tabItem: {
    padding: 12,
    borderBottomWidth: scale(2),
    borderBottomColor: 'transparent',
  },
  tabItemActive: {
    borderBottomColor: Colors.PRIMARY_MAIN,
  },
});

export default styles;
