import React from 'react';
import { StyledContentHome } from './styles';
import PatientList from '../../components/PatientList';

const Home: React.FC = () => {
  return (
    <StyledContentHome>
      <PatientList />
    </StyledContentHome>
  );
};

export default Home;
