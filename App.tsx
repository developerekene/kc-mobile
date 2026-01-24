import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/app/screens/navigation/RootNavigator';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import HomeScreen from './src/app/screens/HomeScreen';
import { enableScreens } from 'react-native-screens';
export default function App() {
  enableScreens();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
        {/* <RootNavigator /> */}
        <Toast />
      </SafeAreaProvider>
    </Provider>

  );
}