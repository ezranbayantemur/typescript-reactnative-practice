import React, {FC} from 'react';
import {View} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import {User} from '../../types';
import RandomUserPanel from './components/RandomUserPanel/RandomUserPanel';

const RandomUsers: FC = () => {
  const {response, loading, clear, refetch} = useFetch<User>({
    url: Config.API_URL,
  });

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <RandomUserPanel
        data={response}
        loading={loading}
        onClear={clear}
        onRefresh={refetch}
      />
    </View>
  );
};

export default RandomUsers;
