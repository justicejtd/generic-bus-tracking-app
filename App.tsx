/**
 * Generic Bus Tracking App
 * https://github.com/justicejtd/generic-bus-tracking-app
 *
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Onboarding from './src/ui/screens/onboarding';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Onboarding
        imageUrl={''}
        title={'Nathaniel'}
        description={'Bus Tracking app'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
export default App;
