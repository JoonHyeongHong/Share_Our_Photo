import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MySvg } from '../assets/icons/menu.svg';

const MenuIcon = (props) => {
  return <MenuSvg {...props} />;
};

const MenuSvg = styled(MySvg)`
  fill: ${(props) => props.theme.fill};
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
`;

export default MenuIcon;
