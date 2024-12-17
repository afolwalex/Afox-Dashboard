import persistStore from 'redux-persist/es/persistStore';
import store from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routing from './Routing';
import Theming from './components/Theming';
import GlobalStyles from './styles/global.styles';

let persistor = persistStore(store);

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Theming>
                    <GlobalStyles />
                    <Routing />
                </Theming>
            </PersistGate>
        </Provider>
    );
};

export default App;
