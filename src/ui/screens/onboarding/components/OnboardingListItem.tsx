import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ViewStyle,
  StyleProp,
  ImageStyle,
  TextStyle,
} from 'react-native';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  classes?: {
    root?: StyleProp<ViewStyle>;
    image?: StyleProp<ImageStyle>;
    title?: StyleProp<TextStyle>;
    description?: StyleProp<TextStyle>;
  };
}

/**
 * This component is responsible for rendering an item in the onboarding list.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the onboarding item.
 * @param {string} props.description - The description of the onboarding item.
 * @param {string} props.imageUrl - The URL of the image to display for the onboarding item.
 * @param {Object} props.classes - An object containing custom CSS classes to apply to the component.
 */
const OnboardingListItem: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  classes,
}) => {
  return (
    <View style={(styles.onBoarding, classes?.root)}>
      <Image style={(styles.image, classes?.image)} source={{uri: imageUrl}} />
      <Text style={classes?.title}>{title}</Text>
      <Text style={classes?.description}>{description}</Text>
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
  title: {
    fontSize: 24,
  },
  subscription: {
    fontSize: 24,
  },
});

export default OnboardingListItem;
