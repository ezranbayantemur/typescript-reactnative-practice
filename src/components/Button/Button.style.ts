import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import Spacing from '../../styles/spacing';

export default {
  primary: StyleSheet.create({
    container: {
      backgroundColor: Colors.purple,
      padding: Spacing.normal,
      margin: Spacing.normal,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: Colors.white,
      fontSize: 15,
    },
  }),
  outline: StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: Colors.purple,
      padding: Spacing.normal,
      margin: Spacing.normal,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: Colors.purple,
      fontSize: 15,
    },
  }),
};
