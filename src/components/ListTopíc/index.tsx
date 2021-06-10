/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

//MATERIAL-UI COMPONENTS
import ListItem from '@material-ui/core/ListItem';

//STYLED COMPONENTS
import { StyledList } from './styles';

type Props = {
  items: Array<any>;
  columns?: Array<any>;
};

const List: React.FC<Props> = ({ items, columns }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <StyledList>
        {items[0] ? (
          items.map((item, index) => (
            <ListItem key={index}>
              {columns
                ? columns.map((column, i) => (
                    <span key={i}>
                      {' - '}
                      {item[column]}
                      {'; '}
                    </span>
                  ))
                : ''}
            </ListItem>
          ))
        ) : (
          <div className="noItems">
            <span>Nada cadastrado :)</span>
          </div>
        )}
      </StyledList>
    </React.Fragment>
  );
};

export default List;
