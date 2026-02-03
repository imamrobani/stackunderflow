import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    padding: scale(16),
    backgroundColor: Colors.WHITE,
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_30,
    gap: scale(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: scale(8),
  },
  statusContainer: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    borderRadius: scale(4),
    alignSelf: 'flex-start',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(4),
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
});

export default styles;
