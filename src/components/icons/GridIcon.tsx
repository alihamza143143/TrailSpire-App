import React from 'react';
import Svg, { Rect } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** 2x2 grid icon for the Home tab - matches Figma bottom nav */
export const GridIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = '#007AFF',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Rect x={1} y={1} width={9.5} height={9.5} rx={3} fill={color} />
    <Rect x={13.5} y={1} width={9.5} height={9.5} rx={3} fill={color} />
    <Rect x={1} y={13.5} width={9.5} height={9.5} rx={3} fill={color} />
    <Rect x={13.5} y={13.5} width={9.5} height={9.5} rx={3} fill={color} />
  </Svg>
);
