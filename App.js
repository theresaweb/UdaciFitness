import React from 'react'
import { View, StatusBar } from 'react-native'
import Tabs from './components/Tabs'
import MainNavigator from './components/MainNavigator'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { purple } from './utils/colors'
import { Constants } from 'expo'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
           <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
           <MainNavigator />
        </View>
      </Provider>
    );
  }
}
