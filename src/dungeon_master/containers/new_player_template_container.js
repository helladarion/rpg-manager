import { connect } from 'react-redux';
import NewPlayerTemplate from '../components/new_player_template';
import NewTemplateActions from '../../actions/new_template_actions';

const mapStateToProps = ({ newPlayerTemplate }) => ({ newPlayerTemplate });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUpdate(payload) {
    console.log('payload', payload);
    NewTemplateActions.update(dispatch, payload);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPlayerTemplate);
