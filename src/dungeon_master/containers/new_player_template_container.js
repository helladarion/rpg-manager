import React from 'react';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';
import Immutable from 'immutable';
// import { connect } from 'react-redux';
import NewPlayerTemplate from '../components/new_player_template';
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
// export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerTemplate);

const NEW_PLAYER_DEFAULTS = Immutable.fromJS({
  displayHP: true,
  displayMP: true,
  displayItems: true,
  displayLog: true,
  gameRaces: [],
  playerAttributes: []
});

const NewPLayerTemplateContainer = React.createClass({
  displayName: 'NewPLayerTemplateContainer',

  mixins: [ReactFireMixin],

  getInitialState() {
    return {};
  },

  componentWillMount: function() {
    this.firebaseRef = firebase.database().ref('newPlayerTemplate/nomeDoTemplate');
    this.bindAsObject(this.firebaseRef, 'newPlayerTemplate');
  },

  handleUpdate(payload) {
    const template = NEW_PLAYER_DEFAULTS.merge(this.state.newPlayerTemplate).merge(payload).delete('.key');
    console.log(template.toJS(), payload, this.state.newPlayerTemplate)
    this.firebaseRef.set(template.toJS());
    this.setState({ newPlayerTemplate: template });
  },

  render() {
    const { newPlayerTemplate } = this.state;
    if (!newPlayerTemplate || newPlayerTemplate.length === 0) return null;

    return (
      <NewPlayerTemplate
        newPlayerTemplate={NEW_PLAYER_DEFAULTS.merge(newPlayerTemplate)}
        onUpdate={this.handleUpdate}
       />
    );
  }
});

export default NewPLayerTemplateContainer;
