import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** Arrow pointing up-right, used on photo cards */
export const ArrowUpRightIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  color = '#007AFF',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M7 17L17 7M17 7H8M17 7V16"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
