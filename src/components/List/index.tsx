import React from 'react';

//MATERIAL-UI COMPONENTS
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

//STYLED COMPONENTS
import { StyledList, StyledItemDescription, StyledItemActions } from './styles';

//ICONS
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

//INTERFACES
import { PatientInterface } from '../../utils/interfaces';

interface Actions {
  edit: (patient: PatientInterface) => void;
  see: (patient: PatientInterface) => void;
  delete: (patient: PatientInterface) => void;
}

type data = {
  items: Array<PatientInterface>;
  actions: Actions;
};

const List: React.FC<data> = ({ items, actions }: data) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={item.name} src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>

            <StyledItemDescription>
              <span>{item.name}</span>
              <div className="description">{item.description}</div>
              <div className="clinicalCondition">
                {item.clinicalCondition.message}
              </div>
            </StyledItemDescription>

            <StyledItemActions>
              <EditIcon
                onClick={() => {
                  actions.edit(item);
                }}
              />
              <AssignmentIcon
                onClick={() => {
                  console.log(item);
                }}
              />
              <HighlightOffIcon
                onClick={() => {
                  console.log(item);
                }}
              />
            </StyledItemActions>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </StyledList>
  );
};

export default List;
