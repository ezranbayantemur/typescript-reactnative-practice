import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import RandomUsers from './containers/RandomUsers';

const App: FC = () => {
  
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <RandomUsers />
    </SafeAreaView>
  );
};

export default App;
