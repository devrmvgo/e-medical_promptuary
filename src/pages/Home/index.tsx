import React from 'react';

//STYLED COMPONENTS
import { StyledContentHome } from './styles';

//GENERAL COMPONENTS
import TitlePage from '../../components/TitlePage';

//IMAGES
import ImageWelcome from './welcome.svg';

const Home: React.FC = () => {
  return (
    <StyledContentHome>
      <TitlePage>Bem vindo ao E-Prontuário</TitlePage>
      <img src={ImageWelcome} />
      <span>
        Aqui você tem controle de todos os seus pacientes clínicos, podendo
        armazenar seus dados e históricos médicos como comorbidades, tratamentos
        e consultas!
      </span>
    </StyledContentHome>
  );
};

export default Home;
