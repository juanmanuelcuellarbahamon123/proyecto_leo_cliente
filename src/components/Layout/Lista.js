import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Lista = () => {
    return (
        <List>
            <ListItem
                component={Link}
                to="/parte-1"
                button
            >
                <ListItemIcon>
                    <AddCircle />
                </ListItemIcon>
                <ListItemText primary="dfwerfwe" />
            </ListItem>
        </List>
    )
}

export default Lista
