const INITIAL_STATE = {
    activeUser: {},
    users: [
      {
        id: 1,
        nome: "initial",
        senha: "00000"
      },
    ],
  };
  
  export default function user(state = INITIAL_STATE, action: any) {
    if (action.type === 'TOGGLE_USER') {
      return {
        ...state,
        activeUser: action.users,
      };
    }
    return state;
  }