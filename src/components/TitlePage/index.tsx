import React from 'react';
import { StyledTitle } from './styles';

type props = {
  children: string;
};

const TitlePage = ({ children }: props): JSX.Element => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default TitlePage;
