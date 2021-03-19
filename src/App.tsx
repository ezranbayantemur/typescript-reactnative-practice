import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import Button from './components/Button';

const App: FC = () => {
  return (
    <SafeAreaView>
      <Button title="Hello" />
    </SafeAreaView>
  );
};

export default App;
