import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** Search magnifying glass icon */
export const SearchIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  color = '#282828',
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Circle cx={8.5} cy={8.5} r={6} stroke={color} strokeWidth={1.8} />
    <Line x1={13} y1={13} x2={18} y2={18} stroke={color} strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);
