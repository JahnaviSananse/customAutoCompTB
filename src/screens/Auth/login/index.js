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
      <View
        style={{
          backgroundColor: 'white',
          width: '95%',
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <View
          style={{
            backgroundColor: 'grey',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text style={{fontSize: 18}}> New Message</Text>
        </View>

        <TextField
          value={email}
          title={STRING.TO}
          placeholder={STRING.SUBJECT}
          change={text => searchEmail(text)}
        />
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: 'grey',
            width: '95%',
            left: 7,
          }}
        />
        {open ? (
          <FlatList
            data={query}
            renderItem={renderData}
            keyExtractor={item => item.id}
          />
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: '85%',
            bottom: '7%',
            // backgroundColor: 'yellow',
          }}>
          <Text> Cc</Text>
          <Text> Bcc</Text>
        </View>
        <TextField placeholder={STRING.SUBJECT} />
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: 'grey',
            width: '95%',
            left: 7,
          }}
        />

        <View
          style={{
            width: 350,
            height: 250,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            width: 380,
            height: 70,
            // backgroundColor: 'red',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{top: 22}}>Send</Text>
          <Image style={styles.stretch} source={IMAGE.TEXT} />
          <Image style={styles.stretch} source={IMAGE.ATTACHMENT} />
          <Image style={styles.stretch} source={IMAGE.LINK} />
          <Image style={styles.stretch} source={IMAGE.HAPPY} />
          <Image style={styles.stretch} source={IMAGE.GDRIVE} />
          <Image style={styles.stretch} source={IMAGE.PHOTO} />
          <Image style={styles.stretch} source={IMAGE.LOCK} />
          <Image style={styles.stretch} source={IMAGE.PEN} />
          <View style={{flexDirection: 'row-reverse', left: 70}}>
            <Image style={styles.stretch} source={IMAGE.DUSTBIN} />
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
