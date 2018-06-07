/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  YellowBox
} from 'react-native';

import ImagePicker from 'react-native-image-picker'

type Props = {};
export default class App extends Component<Props> {

  state = {
    avatarSource: null,
    teste: null
  }

  quandoClick = () => { 
    const options = {
      tite: 'Select Avatar',
      cameraType: 'back',
      takePhotoButtonTitle: 'Camera',
      maxWidth: 120,
      maxHeight: 120,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }else {
        let source = { uri: response.uri };
        console.log(response.uri)
        // You can also display the image using data:
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(Response.data)
        this.setState({
          avatarSource: source
        });
      }
    });


  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.quandoClick}>Forte forte pra dar sorte, {this.state.teste} </Text>
        <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
