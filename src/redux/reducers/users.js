import * as types from '../constants/const';
const initialState = {
  users: [
    {
      id: 1,
      name: 'Иванов Иван',
      login: 'Ivan73',
      lastVizit: '22.04.1998',
      rating: 4
    },
    {
      id: 2,
      name: 'Мухаметзянов Марат',
      login: 'marat2298',
      lastVizit: '31.02.1999',
      rating: 5
    },
    {
      id: 3,
      name: 'Муравьев Игорь',
      login: 'brodyaga73',
      lastVizit: '10.04.2018',
      rating: 3
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
  case types.USER_EDIT: {
    const users = state.users.map(i =>
      i.id === action.payload.id ? action.payload : i
    );

    return {
      ...state,
      users
    };
  }

  case types.USER_DELETE: {
    return {
      ...state,
      users: state.users.filter(i => i.id !== action.payload)
    };
  }

  default:
    return state;
  }
}
