import * as types from '../constants/const';

export const editUser = user => ({
  type: types.USER_EDIT,
  payload: user
});

export const deleteUser = id => ({
  type: types.USER_DELETE,
  payload: id
});
