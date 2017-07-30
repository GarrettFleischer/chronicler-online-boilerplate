/*
 *
 * Node
 *
 */

import { Button } from 'material-ui';
import React, { PropTypes } from 'react';
import DraggableList from 'react-draggable-list';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Component from '../../components/Component';
import { makeText } from '../../components/Component/types';
import messages from './messages';
import { addComponent } from './reducer';
import makeSelectNode from './selectors';


export class Node extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  onAddComponentClicked() {
    this.props.dispatch(addComponent(makeText('Component: ')));
  }

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
          list={node}
        />
        <Button
          raised
          onClick={() => {
            this.onAddComponentClicked();
          }}
        ><FormattedMessage {...messages.addComponent} /></Button>
      </div>
    );
  }
}


Node.propTypes = {
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
