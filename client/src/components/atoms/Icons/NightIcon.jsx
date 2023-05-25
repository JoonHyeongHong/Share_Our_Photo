import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MySvg } from '../../../assets/icons/night.svg';

const NightIcon = (props) => {
  return <NightSvg {...props} />;
};

export default NightIcon;

const NightSvg = styled(MySvg)`
  fill: ${(props) => props.theme.fill};
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
`;
