import React from 'react';
import Svg, { Line } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** Plus/Add icon for the bottom nav bar */
export const PlusIcon: React.FC<Props> = ({
  width = 26,
  height = 26,
  color = '#FFFFFF',
}) => (
  <Svg width={width} height={height} viewBox="0 0 26 26" fill="none">
    <Line x1={13} y1={3} x2={13} y2={23} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
    <Line x1={3} y1={13} x2={23} y2={13} stroke={color} strokeWidth={2.5} strokeLinecap="round" />
  </Svg>
);
