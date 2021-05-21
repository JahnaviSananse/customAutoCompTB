import React, {useState} from 'react';
import {View, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import TextField from '../../../components/TextField/index';
import {IMAGE} from '../../../assets/images/images';
import styles from './style';
import * as STRING from '../../../constants/constant';
import RenderEmail from '../../../components/renderEmail/index';

const Data = [
  {id: 1, email: 'tanya@gmail.com'},
  {id: 2, email: 'tanvi@gmail.com'},
  {id: 3, email: 'maya@gmail.com'},
  {id: 4, email: 'komal@gmail.com'},
  {id: 5, email: 'maitri@gmail.com'},
];
const Login = () => {
  const [query, setQuery] = useState([]);
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const searchEmail = text => {
    setEmail(text);
    setOpen(true);
    const regex = new RegExp(`${text.trim()}`, 'gi');
    setQuery(Data.filter(value => value.email.match(regex) == text));
  };

  const renderData = ({item}) => {
    return (
      <RenderEmail
        emailPress={() => {
          setEmail(item.email);
          setOpen(false);
        }}
        email={item.email}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.stretch} source={IMAGE.GIRL} />
      </View>
      <TextField
        value={email}
        placeholder={STRING.ENTER_EMAIL}
        title={STRING.EMAIL}
        change={text => searchEmail(text)}
      />

      {open ? (
        <FlatList
          data={query}
          renderItem={renderData}
          keyExtractor={item => item.id}
        />
      ) : null}
    </>
  );
};

export default Login;
