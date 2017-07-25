/**
 *
 * Component
 *
 */

// import styled from 'styled-components';

import DragHandle from 'material-ui-icons/DragHandle';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


export const CText = 'TEXT_COMPONENT';
export const CNext = 'NEXT_COMPONENT';


function content(type) {
  switch (type) {
    case CText:
      return <FormattedMessage {...messages.header} />;
    case CNext:
      return <FormattedMessage {...messages.header} />;
    default:
      return <span />;
  }
}


class Component extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getDragHeight() {
    return 48;
  }


  render() {
    const { dragHandle, type } = this.props;
    return (
      <Card>
        <CardContent>
          {dragHandle(<div><DragHandle /></div>)}
          {content(type)}
        </CardContent>
      </Card>
    );
  }
}


Component.propTypes = {
  dragHandle: PropTypes.func,
  type: PropTypes.oneOf([CText, CNext]),
};

export default Component;
