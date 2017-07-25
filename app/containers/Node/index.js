/*
 *
 * Node
 *
 */

import React, { PropTypes } from 'react';
import DraggableList from 'react-draggable-list';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Component from '../../components/Component';
import messages from './messages';
import makeSelectNode from './selectors';


export class Node extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Node"
          meta={[
            { name: 'description', content: 'Description of Node' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <DraggableList
          itemKey="name"
          template={Component}
          list={[{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }]}
        />
      </div>
    );
  }
}


Node.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Node: makeSelectNode(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Node);
