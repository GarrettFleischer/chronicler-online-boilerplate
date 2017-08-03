/*
 *
 * Node
 *
 */

import { Button } from 'material-ui';
import Paper from 'material-ui/Paper';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import DraggableList from 'react-draggable-list';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { mouseTrap } from 'react-mousetrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Component from '../../components/Component';
import { makeText } from '../../nodes';
import { redo, undo } from '../../stateHistory';
import messages from './messages';
import { addComponent, componentListChanged } from './reducer';
import makeSelectNode from './selectors';


const styleSheet = createStyleSheet((theme) => ({
  paper: {
    marginTop: 30,
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export class Node extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.bindShortcut('ctrl+z', () => this.onUndoClicked());
    this.props.bindShortcut(['ctrl+shift+z', 'ctrl+y'], () => this.onRedoClicked());
  }


  componentWillUnmount() {
    this.props.unbindShortcut('ctrl+z');
    this.props.unbindShortcut(['ctrl+shift+z', 'ctrl+y']);
  }


  onAddComponentClicked() {
    this.props.dispatch(addComponent(makeText(-1, 'text')));
  }


  onListChanged(newList) {
    this.props.dispatch(componentListChanged(newList));
  }


  onUndoClicked() {
    this.props.dispatch(undo());
  }


  onRedoClicked() {
    this.props.dispatch(redo());
  }


  render() {
    const { data, classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Helmet
          title="Node"
          meta={[
            { name: 'description', content: 'Description of Node' },
          ]}
        />
        <Button
          raised
          onClick={() => {
            this.onAddComponentClicked();
          }}
        ><FormattedMessage {...messages.addComponent} /></Button>
        <Button
          raised
          disabled={!data.history.canUndo}
          onClick={() => {
            this.onUndoClicked();
          }}
        >Undo</Button>
        <Button
          raised
          disabled={!data.history.canRedo}
          onClick={() => this.onRedoClicked()}
        >Redo</Button>
        <DraggableList
          itemKey="id"
          template={Component}
          list={data.node.components}
          onMoveEnd={(newList) => this.onListChanged(newList)}
        />
      </Paper>
    );
  }
}


Node.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  bindShortcut: PropTypes.func.isRequired,
  unbindShortcut: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectNode(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(mouseTrap(withStyles(styleSheet)(Node)));
