import React, { forwardRef } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet, View } from 'react-native';

type HeaderButtonProps = {
  onPress?: () => void;
};

const HeaderButtonRenderFn: React.ForwardRefRenderFunction<View, HeaderButtonProps> = (
  { onPress },
  ref
) => {
  return (
    <Pressable ref={ref} onPress={onPress}>
      {({ pressed }: { pressed: boolean }) => (
        <FontAwesome
          name="info-circle"
          size={25}
          color="gray"
          style={[
            styles.headerRight,
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        />
      )}
    </Pressable>
  );
};

export const HeaderButton = forwardRef(HeaderButtonRenderFn);

HeaderButton.displayName = 'HeaderButton';

export const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});
