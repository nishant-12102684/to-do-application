import { createStore } from 'redux';

// Action Types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

export const deleteTask = id => ({
  type: DELETE_TASK,
  payload: id
});

// Initial State
const initialState = {
  tasks: []
};

// Reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: state.tasks.length + 1, text: action.payload }]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

// Store
const store = createStore(tasksReducer);

export default store;
