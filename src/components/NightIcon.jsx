import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MySvg } from '../assets/icons/night.svg';

const NightIcon = ({ size, isDarkMode }) => {
  return (
    <Div {...size}>
      <NightSvg {...isDarkMode} />
    </Div>
  );
};

export default NightIcon;

const Div = styled.div`
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
`;

const NightSvg = styled(MySvg)`
  fill: ${(props) => props.theme.fill};
`;
