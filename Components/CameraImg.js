import React from 'react';
import { Button, Image, View } from 'react-native';
import { ImagePicker } from 'expo';

export default class CameraImg extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}