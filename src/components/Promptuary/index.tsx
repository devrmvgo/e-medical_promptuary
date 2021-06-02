import React from 'react';

import Button from '@material-ui/core/Button';
import Profile from '../Profile';

function Promptuary(): JSX.Element {
  return (
    <div>
      <Profile />
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Promptuary;
