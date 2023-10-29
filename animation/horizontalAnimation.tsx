
interface Props {
  current?: any;
  layouts?: any;
}

export const horizontalAnimation = {
  cardStyleInterpolator: (cos: Props) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: cos.current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [cos.layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};
