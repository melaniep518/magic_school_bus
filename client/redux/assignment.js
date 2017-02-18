import axios from 'axios';
import createStore from './createStore';

// -------------------
// types
// -------------------

const GET_ASSINGMENT = 'GET_ASSINGMENT';

// -------------------
// actions
// -------------------

const getAssignment = assignments => ({
  type: GET_ASSINGMENT,
  data: assignments,
});

export const AsyncPostAssignment = data => () => {
  axios.post('/api/assignments', data);
};

export const AsyncGetAssignment = classId => (dispatch) => {
  axios.get(`/api/assignments/byClassId/${classId}`)
  .then((assignments) => {
    dispatch(getAssignment(assignments.data));
  });
};

export const enterGetAssignments = (nextState) => {
  const classId = nextState.params.classId;
  return createStore.dispatch(AsyncGetAssignment(classId));
};

// -------------------
// reducer
// -------------------
const initialState = {
  assignments: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSINGMENT:
      return Object.assign({}, {assignments: action.data});
    default:
      return state;
  }
};
