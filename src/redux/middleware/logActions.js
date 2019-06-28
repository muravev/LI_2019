export const logActions = store => next => action => {
  console.log('Action 1', action);
  const result = next(action);
  console.log('Action 2', store.getState());
  return result;
};
