import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './style';

const RenderEmail = props => {
  const {emailPress, email} = props;
  return (
    <TouchableOpacity onPress={() => emailPress()}>
      <View style={styles.view}>
        <Text style={styles.text}>{email}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default RenderEmail;
