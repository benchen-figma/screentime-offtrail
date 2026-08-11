import { useColorScheme } from 'react-native';

export default function useSystemMode() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? 'Dark' : 'Light';
}
