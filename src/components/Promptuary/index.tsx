import React from 'react';
import Button from '@material-ui/core/Button';

const Promptuary = (): JSX.Element => {
  return (
    <div>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

export default Promptuary;
