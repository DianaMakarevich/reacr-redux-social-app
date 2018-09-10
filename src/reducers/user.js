function user(state = {}, action) {
    switch(action.type) {
      case 'USERS_FETCHED':
        return action.result;
      default:
        return state;
    }
  }
  
  export default user;