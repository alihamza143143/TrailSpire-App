import React from 'react';
import Svg, { Line, Circle } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** Horizontal sliders/filter icon */
export const FilterIcon: React.FC<Props> = ({
  width = 20,
  height = 20,
  color = '#282828',
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Line x1={2} y1={5} x2={18} y2={5} stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1={2} y1={10} x2={18} y2={10} stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Line x1={2} y1={15} x2={18} y2={15} stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    <Circle cx={6} cy={5} r={2} fill="white" stroke={color} strokeWidth={1.5} />
    <Circle cx={14} cy={10} r={2} fill="white" stroke={color} strokeWidth={1.5} />
    <Circle cx={9} cy={15} r={2} fill="white" stroke={color} strokeWidth={1.5} />
  </Svg>
);
