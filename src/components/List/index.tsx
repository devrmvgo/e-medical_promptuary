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

interface Patient {
  id: string;
  name: string;
  description: string;
  clinicalCondition: string;
}

type data = {
  items: Array<Patient>;
};

const List: React.FC<data> = ({ items }: data) => {
  return (
    <StyledList>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt={item.name} src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            {/* <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography component="span" color="textSecondary">
                    {item.description}
                  </Typography>
                </React.Fragment>
              }
            /> */}

            <StyledItemDescription>
              <span>{item.name}</span>
              <div className="description">{item.description}</div>
              <div className="condiction">{item.clinicalCondition}</div>
            </StyledItemDescription>

            <StyledItemActions>
              <EditIcon
                onClick={() => {
                  console.log(item);
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
