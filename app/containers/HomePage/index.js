/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Component from '../../components/Component';
import messages from './messages';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <List>
          <ListItem>
            <Component />
          </ListItem>
          <ListItem>
            <Component />
          </ListItem>
          <ListItem>
            <Component />
          </ListItem>
          <ListItem>
            <Component />
          </ListItem>
        </List>
        <Button raised><FormattedMessage {...messages.addComponent} /></Button>
      </div>
    );
  }
}
