import React from 'react';
import { Button, Image, View,TouchableOpacity } from 'react-native';
import { ImagePicker } from 'expo';

export default class SelectImg extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
       <TouchableOpacity onPress={this._pickImage}>
          {this.state.image ? (
            <Image
              source={{ uri: this.state.image }}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            />
          ) : (
            <Image
              source={require('../assets/margarita.jpg')}
              style={{ width: 160, height: 160, borderRadius: 80 }}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }

  checkPermissions = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    console.log(status);
    if (status !== 'granted') {
        Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
}

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}