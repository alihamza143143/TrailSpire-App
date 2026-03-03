import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** Compass/Explore icon for the bottom nav bar */
export const CompassIcon: React.FC<Props> = ({
  width = 26,
  height = 26,
  color = '#FFFFFF',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={12} r={10} stroke={color} strokeWidth={1.8} />
    <Path
      d="M14.828 9.172l-1.414 4.243-4.243 1.414 1.414-4.243 4.243-1.414z"
      fill={color}
    />
  </Svg>
);
