import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
  } from 'react-native';
  import {Router,Stack,Scene} from 'react-native-router-flux'
export default class route extends Component{
    render(){
        return(
            <View>const App = () => (
                <Router>
                  <Stack key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="register" component={Register} title="Register"/>
                    <Scene key="home" component={Home}/>
                  </Stack>
                </Router>
              );
              </View>
        );
    }
}