import { StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth, scale } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 28,
  },
  logo: {
    width: scale(64),
    height: scale(64),
    alignSelf: 'center',
    marginVertical: 16,
  },
  bgDown: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
});

export default styles;
