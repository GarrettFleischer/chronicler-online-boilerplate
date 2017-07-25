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


function Component(props) {
  const { dragHandle } = props;
  return (
    <Card>
      <CardContent>
        {dragHandle(<div className="dragHandle">drag me here</div>)}
        <FormattedMessage {...messages.header} />
      </CardContent>
    </Card>
  );
}


Component.propTypes = {
  dragHandle: React.PropTypes.OBJECT,
};

export default Component;
