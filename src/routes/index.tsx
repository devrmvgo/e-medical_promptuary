import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import PatientList from '../pages/PatientList';
import PatientRegister from '../pages/PatientRegister';
import Promptuary from '../pages/Promptuary';

interface Props {
  children?: JSX.Element[] | JSX.Element;
}

function Routes({ children }: Props): JSX.Element {
  return (
    <React.Fragment>
      {children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/patients" component={PatientList} />
        <Route exact path="/patients/register" component={PatientRegister} />
        <Route exact path="/patients/promptuary" component={Promptuary} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </React.Fragment>
  );
}

export default Routes;
