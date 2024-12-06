import { THEMES, useStore } from '../store/store';

export const usePalette = () => {
  const store = useStore();
  const theme = store.get('theme');
  const mode = theme || THEMES.DARK
  return { mode };
}
