/**
 *
 * Component
 *
 */

// import styled from 'styled-components';

import DragHandle from 'material-ui-icons/DragHandle';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { NodeType } from '../../nodes';


function content(item) {
  switch (item.type) {
    case NodeType.NEXT:
      return <div style={{ paddingTop: '10px' }}>{`${item.text} ${item.id.toString()}`}</div>;
    case NodeType.TEXT:
      return <div style={{ paddingTop: '10px' }}>{`${item.text} ${item.id.toString()}`}</div>;
    default:
      return <div><FormattedMessage {...messages.unknown} /> {item.id.toString()}</div>;
  }
}


class Component extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // noinspection JSUnusedGlobalSymbols
  getDragHeight() {
    return 48;
  }


  render() {
    const { dragHandle, item } = this.props;
    return (
      <Card>
        <CardContent>
          <Grid container gutter={8}>
            <Grid item xs={1}>
              {dragHandle(<DragHandle />)}
            </Grid>
            <Grid item xl>
              {content(item)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}


Component.propTypes = {
  dragHandle: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default Component;
