import React from 'react';

//MATERIAL-UI COMPONENTS
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { StyledButton, StyledAction } from './styles';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

type Props = {
  children: JSX.Element;
  submit: () => void;
};

const ModalForm = ({ children, submit }: Props): JSX.Element => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {children}

      <StyledAction
        type="button"
        className="submit"
        onClick={() => {
          submit();
          setOpen(false);
        }}
      >
        Adicionar
      </StyledAction>

      <StyledAction
        type="button"
        className="cancel"
        onClick={() => {
          setOpen(false);
        }}
      >
        Cancelar
      </StyledAction>
    </div>
  );

  return (
    <div>
      <StyledButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Adicionar
      </StyledButton>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalForm;
