import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MySvg } from '../assets/icons/day.svg';

const DayIcon = (props) => {
  return <DaySvg {...props} />;
};

export default DayIcon;

const DaySvg = styled(MySvg)`
  fill: ${(props) => props.theme.fill};

  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
`;
