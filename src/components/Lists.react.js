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

const GridList = ({list}) => (
    <div>
        <Paper style={style} zDepth={1}>
            <Subheader>{list.name}</Subheader>
            <List>
                {list.grids.map(item => <GridItem item={item} key={item.name}/>)}
                </List>
        </Paper>
    </div>
);
class Lists extends Component {
    constructor(props) {
      super(props);
      this.state = {
        lists: [
          {
            name: 'Anime',
            grids: [
              { name: 'Dragon Ball', id: 'SJMAKVQ_G' },
              { name: 'HunterXHunter', id: 'SJv2cNQOz' }
            ]
          },
          {
            name: 'Shows',
            grids: [
              { name: 'Psych', id: 'BJBlj4mdz' },
              { name: 'Criminal Minds', id: 'Hkl1u4Xuf' },
              { name: 'A Million Little Things', id: 'SkzKu47uf' }
            ]
          },
          {
            name: 'other',
            grids: [{ name: 'Harry Potter', id: 'S1qghN7dM' }]
          }
        ]
      };
    }














export default Lists;