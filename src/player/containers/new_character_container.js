import React from 'react';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';
import Immutable from 'immutable';
// import { connect } from 'react-redux';
import _ from 'lodash';
import NewCharacter from '../components/new_character';
// import NewTemplateActions from '../../actions/new_template_actions';
//
// const mapStateToProps = ({ newPlayerTemplate }) => ({ newPlayerTemplate });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onUpdate(payload) {
//     console.log('payload', payload);
//     NewTemplateActions.update(dispatch, payload);
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(NewCharacter);

const NewCharacterContainer = React.createClass({
  displayName: 'NewCharacterContainer',

  mixins: [ReactFireMixin],

  getInitialState() {
    return {};
  },

  componentWillMount: function() {
    this.firebaseRef = firebase.database().ref('newPlayerTemplate');
    this.bindAsArray(this.firebaseRef, 'newPlayerTemplates');
  },

  handleUpdate(payload) {
    
  },

  render() {
    const { newPlayerTemplates } = this.state;
    if (!newPlayerTemplates || newPlayerTemplates.length === 0) return null;

    return (
      <NewCharacter
        newPlayerTemplates={Immutable.fromJS(newPlayerTemplates)}
        onUpdate={this.handleUpdate}
       />
    );
  }
});

export default NewCharacterContainer;
