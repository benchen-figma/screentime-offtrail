import { View, StyleSheet } from 'react-native';
import { Children } from 'react';

export default function Facepile({ children, style }) {
  const items = Children.toArray(children);
  return (
    <View style={[styles.row, style]}>
      {items.map((child, i) => (
        <View key={i} style={i > 0 ? styles.overlap : null}>{child}</View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  overlap: { marginLeft: -20 },
});
