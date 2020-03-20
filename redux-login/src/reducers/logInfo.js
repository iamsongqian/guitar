export default function logInfo(state = { name: 'no user' }, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        name:action.name
      }
    default:
      return state;
  }
}