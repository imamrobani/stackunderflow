import {
  Alert,
  Dimensions,
  PixelRatio,
  Platform,
  ToastAndroid,
} from 'react-native';
import { BarcodeScanningResult } from 'expo-camera';

export const { width: deviceWidth, height: deviceHeight } =
  Dimensions.get('window');

export const scale = (scaleWidth: number) => {
  const DESIGN_WIDTH = 375;

  return Math.round(
    PixelRatio.roundToNearestPixel(scaleWidth * (deviceWidth / DESIGN_WIDTH)),
  );
};

export const formatCurrency = (amount: number, withoutRp?: boolean) => {
  const _amount = amount < 0 ? 0 : amount;

  return `${withoutRp ? '' : 'Rp'}${String(_amount).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.',
  )}`;
};

export const showToastNative = (message: string) => {
  if (Platform.OS === 'ios' || Platform.OS === 'windows') {
    Alert.alert('StackUnderflow', message);
  } else {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }
};

export const sanitizeNumberInput = (raw: string) => raw.replace(/[^0-9]/g, '');

export const formatThousands = (raw: string) => {
  const digits = sanitizeNumberInput(raw);
  if (!digits) {
    return '';
  }
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

export const toNumber = (raw: string) => {
  const digits = sanitizeNumberInput(raw);
  return digits ? parseInt(digits, 10) : 0;
};

// Helper function to check if a barcode is inside the scanning window
export const isInsideWindow = (result: BarcodeScanningResult) => {
  const WINDOW_W = 250;
  const WINDOW_H = 250;
  const left = (deviceWidth - WINDOW_W) / 2;
  const top = (deviceHeight - WINDOW_H) / 2;
  const right = left + WINDOW_W;
  const bottom = top + WINDOW_H;

  const anyResult = result as unknown as {
    bounds?: {
      origin: { x: number; y: number };
      size: { width: number; height: number };
    };
    cornerPoints?: Array<{ x: number; y: number }>;
  };

  let cx: number | undefined;
  let cy: number | undefined;

  if (anyResult.bounds?.origin && anyResult.bounds?.size) {
    cx = anyResult.bounds.origin.x + anyResult.bounds.size.width / 2;
    cy = anyResult.bounds.origin.y + anyResult.bounds.size.height / 2;
  } else if (
    Array.isArray(anyResult.cornerPoints) &&
    anyResult.cornerPoints.length
  ) {
    const xs = anyResult.cornerPoints.map((p) => p.x);
    const ys = anyResult.cornerPoints.map((p) => p.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    cx = (minX + maxX) / 2;
    cy = (minY + maxY) / 2;
  }

  if (cx == null || cy == null) {
    return true;
  }

  return cx >= left && cx <= right && cy >= top && cy <= bottom;
};

export const uriToFile = (uri: string, prefix?: string) => {
  if (!uri) {
    return { name: '', type: '', uri: '' };
  }

  let filename = uri.split('/').pop() || `file-${Date.now()}`;
  if (prefix) {
    filename = `${prefix}-${filename}`;
  }
  const match = /\.(\w+)$/.exec(filename);
  const ext = match ? match[1].toLowerCase() : 'jpeg';
  const type = `image/${ext === 'jpg' ? 'jpeg' : ext}`;

  return {
    name: filename,
    type,
    uri,
  };
};

export const formatTime = (s: number) => {
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
};
