import React from 'react';
import { StyledContentHome } from './styles';
import AppBar from '../../components/AppBar';

const Home: React.FC = () => {
  return (
    <StyledContentHome>
      <AppBar />
    </StyledContentHome>
  );
};

export default Home;
