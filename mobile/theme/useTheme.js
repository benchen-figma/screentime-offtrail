import useSystemMode from '../hooks/useSystemMode';
import { themes } from './tokens';

export default function useTheme() {
  const mode = useSystemMode();
  return themes[mode];
}
