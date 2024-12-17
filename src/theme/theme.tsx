import { Switch } from '@mui/material';
import { ChangeEvent, FC, memo, useCallback } from 'react';
import { THEMES, useStore } from '../store/store';

type Event = ChangeEvent<HTMLInputElement>;

export const Theme: FC = memo(() => {
  const store = useStore();
  const onChange = useCallback((ev: Event) => {
    const value = ev.target.value === THEMES.DARK
      ? THEMES.LIGHT
      : THEMES.DARK;
    store.set('theme', value);
  }, [store]);

  const theme = store.get('theme');

  return (
    <Switch
      size="small"
      value={theme}
      checked={theme == THEMES.LIGHT}
      onChange={onChange}
    />
  )
});