/**
 *
 * Component
 *
 */

// import styled from 'styled-components';

import DragHandle from 'material-ui-icons/DragHandle';
import Card, { CardContent } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


export const CText = 'TEXT_COMPONENT';
export const CNext = 'NEXT_COMPONENT';


function content(item) {
  switch (item.type) {
    case CText:
      return <div style={{ paddingTop: '10px' }}>{`${item.data.text} ${item.id.toString()}`}</div>;
    case CNext:
      return <div style={{ paddingTop: '10px' }}>{`${item.data.text} ${item.id.toString()}`}</div>;
    default:
      return <div><FormattedMessage {...messages.unknown} /></div>;
  }
}


class Component extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getDragHeight() {
    return 48;
  }

  render() {
    const { dragHandle, item } = this.props;
    return (
      <Card>
        <CardContent>
          {dragHandle(<div><DragHandle /></div>)}
          <Divider />
          {content(item)}
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
