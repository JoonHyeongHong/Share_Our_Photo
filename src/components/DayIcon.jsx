import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MySvg } from '../assets/icons/day.svg';

const DayIcon = ({ isDarkMode, size }) => {
  return (
    <Div {...size}>
      <DaySvg {...isDarkMode} />
    </Div>
  );
};

export default DayIcon;

const Div = styled.div`
  width: ${(props) => props.size + 'px'};
  height: ${(props) => props.size + 'px'};
`;
const DaySvg = styled(MySvg)`
  fill: ${(props) => props.theme};
`;
