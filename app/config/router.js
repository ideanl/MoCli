import { StackNavigator, SwitchNavigator } from 'react-navigation';

import Landing from '../screens/Landing';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Main from '../screens/Main';
import Request from '../screens/Request';
import Info from '../screens/Info';

const LandingStack = StackNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Landing',
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Sign Up',
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Login',
      },
    },
  },
  {
    mode: 'modal',
  }
);

export const SignedIn = StackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Main'
      }
    },
    Request: {
      screen: Request,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Request'
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
        headerTitle: 'Appointments'
      }
    }
  },
  {
    mode: 'modal'
  }
);

export default SwitchNavigator(
  {
    SignedIn: {
      screen: SignedIn,
    },
    Landing: {
      screen: LandingStack,
    }
  },
  {
    initialRouteName: 'Landing'
  }
);
