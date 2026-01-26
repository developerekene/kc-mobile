import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import Index from './src/app/screens/navigation/Index';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Index />
        <Toast />
      </SafeAreaProvider>
    </Provider>

  );
}