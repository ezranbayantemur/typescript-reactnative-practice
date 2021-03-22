import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import Button from '../../../../components/Button';
import UserItem from '../../../../components/list-item/UserItem';
import {User} from '../../../../types';

interface RandomUserPanelProps {
  data: Partial<User>[];
  loading: boolean;
  onClear: () => void;
  onRefresh: () => void;
}

const RandomUserPanel: FC<RandomUserPanelProps> = ({
  data,
  loading,
  onClear,
  onRefresh,
}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <FlatList data={data} renderItem={({item}) => <UserItem user={item} />} />
      <Button title="Temizle" onPress={onClear} type="outline" />
      <Button title="Yenile" onPress={onRefresh} loading={loading} />
    </View>
  );
};

export default RandomUserPanel;
