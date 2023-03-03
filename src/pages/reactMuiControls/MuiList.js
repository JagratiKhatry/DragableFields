import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React, {useEffect, useState} from 'react';
import FolderIcon from '@mui/icons-material/Folder';

export const MuiList = (props) => {
  const {listItems, secondaryActions} = props;

  const [items, setItems] = useState(listItems);

  useEffect(() => {
    setItems(listItems);
  }, [listItems]);

  return (
    <List dense>
      {items.map((listItem, i) => (
        <ListItem
          key={listItem.id || i}
          secondaryAction={
            secondaryActions &&
            secondaryActions.map((action) => (
              <IconButton
                key={action.id}
                edge='end'
                onClick={(e) => action.onClick(e, listItem, i)}
              >
                {action.icon}
              </IconButton>
            ))
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={listItem?.name} secondary={listItem?.size} />
        </ListItem>
      ))}
    </List>
  );
};
