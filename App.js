import React from 'react'
import { View, Text } from 'react-native'
import Tabs from './components/Tabs'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'



export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
           <Tabs />
        </View>
      </Provider>
    );
  }
}
