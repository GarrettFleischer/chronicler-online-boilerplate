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
    const { node } = this.props;
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
          itemKey="id"
          template={Component}
          list={node} // {[{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }]}
        />
      </div>
    );
  }
}


Node.propTypes = {
// eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  node: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  node: makeSelectNode(),
});


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Node);
