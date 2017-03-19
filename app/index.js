import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default class HCIApp extends Component {
  constructor(props) {
    super(props)
    this.state = {hciText: 'Hello 21w.789x'}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
      {this.state.hciText}
        </Text>
        <Button
          onPress={() => {
            this.setState({
              hciText: 'Goodbye 21w.789x'
            })
          }}
          title="Change text"
          color="#841584"
          accessibilityLabel="Change text"
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
