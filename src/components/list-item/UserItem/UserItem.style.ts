import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors';
import Spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.smokeGray,
    padding: Spacing.normal,
    margin: Spacing.normal,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
