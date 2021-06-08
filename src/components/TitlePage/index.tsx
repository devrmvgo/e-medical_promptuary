import React from 'react';
import { StyledTitle } from './styles';

type Props = {
  children: string;
};

const TitlePage: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default TitlePage;
