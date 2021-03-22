import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {User} from '../../../types';
import styles from './UserItem.style';

export interface UserItemProps {
  user: Partial<User>;
}

const UserItem: FC<UserItemProps> = ({user}) => {
  return (
    <View testID="user-item" style={styles.container}>
      <Image style={styles.avatar} source={{uri: user.avatar}} />
      <View>
        <Text style={styles.username}>{user.username}</Text>
        <Text>
          {user.first_name} {user.last_name}
        </Text>
      </View>
    </View>
  );
};

export default UserItem;
