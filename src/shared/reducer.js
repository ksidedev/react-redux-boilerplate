export const initialState = {
  timeStamp: null,
  reduxSavedExample: '',
  convertTime: '',
  dummyPlanOptions: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_TIMESTAMP':
    return Object.assign({}, state, {
      timeStamp: Date.now()
    })
  case 'UPDATE_REDUX_EXAMPLE':
    return Object.assign({}, state, {
      reduxSavedExample: action.exp
    })
  case 'UPDATE_CONVERT_TIME':
    return Object.assign({}, state, {
      convertTime: action.time
    })
  case 'SET_DUMMY_PLAN_OPTIONS':
    return Object.assign({}, state, {
      dummyPlanOptions: action.options
    })
  default:
    return state
  }
}
