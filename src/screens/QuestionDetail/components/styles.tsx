import { StyleSheet } from 'react-native';
import { Colors } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  contentContainer: {
    padding: scale(16),
  },
  questionContainer: {
    backgroundColor: Colors.WHITE,
    padding: scale(16),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_30,
    marginBottom: scale(16),
    gap: scale(12),
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: scale(8),
  },
  statusContainer: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    borderRadius: scale(4),
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
    marginTop: scale(4),
  },
});

export default styles;
