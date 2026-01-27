import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FloatingButtonProps {
  icon: string;
  onPress: () => void;
  style?: ViewStyle;
  backgroundColor?: string;
}

export default function FloatingButton({
  icon,
  onPress,
  style,
  backgroundColor = '#6200ee',
}: FloatingButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.fab, { backgroundColor }, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Icon name={icon} size={28} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});