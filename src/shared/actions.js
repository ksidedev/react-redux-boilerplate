export const updateTimestamp = () => ({
  type: 'UPDATE_TIMESTAMP'
})

export const updateReduxExample = exp => ({
  type: 'UPDATE_REDUX_EXAMPLE',
  exp
})

export const updateConvertTime = time => ({
  type: 'UPDATE_CONVERT_TIME',
  time
})

export const setDummyPlanOptions = options => ({
  type: 'SET_DUMMY_PLAN_OPTIONS',
  options
})
