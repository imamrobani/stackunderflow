import { StyleSheet } from 'react-native';
import { Colors, fontTypes } from '@constants';
import { scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.NEUTRAL_10,
  },
  contentContainer: {
    padding: scale(16),
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
    marginTop: scale(4),
  },
  sectionTitle: {
    marginBottom: scale(12),
    marginTop: scale(8),
    color: Colors.NEUTRAL_90,
    ...fontTypes.subtitle1SemiBold,
  },
  commentItem: {
    backgroundColor: Colors.WHITE,
    padding: scale(12),
    borderRadius: scale(8),
    borderBottomWidth: 1,
    borderBottomColor: Colors.NEUTRAL_30,
    marginBottom: scale(8),
    gap: scale(8),
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
