import { useColorScheme } from 'react-native';

const useDarkTheme = () => useColorScheme() === 'dark';

export default useDarkTheme;
