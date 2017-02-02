export default {
  update(dispatch, payload) {
    dispatch({
      type: 'NEW_TEMPLATE_UPDATE',
      data: payload
    });
  }
};
