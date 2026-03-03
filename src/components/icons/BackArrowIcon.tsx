import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

/** Back arrow / chevron left icon */
export const BackArrowIcon: React.FC<Props> = ({
  width = 24,
  height = 24,
  color = '#282828',
}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 19l-7-7 7-7"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
