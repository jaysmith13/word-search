import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const style = {
    margin: 20,
    display: 'inline-block'
};

const GridItem = ({item}) => (
    <div>
        <Link to={item.id}>
            <ListItem primaryText={item.name} />
        </Link>
    </div>
);

