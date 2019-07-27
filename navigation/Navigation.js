import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import Home from '../views/Home';
import Login from '../views/Login';
import AuthLoading from '../views/AuthLoading';

const AppStack = createStackNavigator(
    {
        Home: Home
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: Login
    },
    {
        headerMode: 'none'
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));