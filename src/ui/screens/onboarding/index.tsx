import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import OnboardingList from './components/OnboardingList';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const url: string =
  'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D';

const Onboarding: React.FC<Props> = ({title, description, imageUrl}) => {
  return (
    <View style={styles.onBoarding}>
      <OnboardingList
        imageUrl={url}
        title={'Nathaniel'}
        description={'Bus tracking app'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  onBoarding: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  image: {flex: 1, resizeMode: 'contain'},
  title: {},
  subscription: {},
});

export default Onboarding;
