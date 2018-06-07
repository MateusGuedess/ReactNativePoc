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

  _pickImage = async () => {
    const options = {
      tite: 'Select Avatar',
      cameraType: 'back',
      takePhotoButtonTitle: 'Camera',
      maxWidth: 120,
      maxHeight: 120,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
    };
    try {
      await ImagePicker.launchImageLibrary(options, (response) => {
        console.log(response);
        this.setState({
          avatarSource: response.uri,
          teste: 'setou',
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this._pickImage}>Pegar Imagem: {this.state.teste}</Text>

        {this.state.avatarSource && (
          <Image
          resizeMode="contain"
            source={{
              uri: this.state.avatarSource,
            }}
            style={styles.uploadAvatar}
          />
        )}
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
  uploadAvatar: {
    width: 300,
    height: 300
  },
});
