/**
 *
 * Component
 *
 */
// import styled from 'styled-components';
import Card, { CardContent } from 'material-ui/Card';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Component() {
  return (
    <Card>
      <CardContent>
        <FormattedMessage {...messages.header} />
      </CardContent>
    </Card>
  );
}


Component.propTypes = {};

export default Component;
