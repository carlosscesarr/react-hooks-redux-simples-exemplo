export const Types = {
  ADD: "todos/ADD"
}
const INITIAL_STATE = [];
export default function todos(state = INITIAL_STATE, action) {
  //action recebe {type: 'ADD_TTODO', text: 'fazer café'}
  switch (action.type) {
    case Types.ADD:
      return [...state, { id: Math.random(), text: action.text }]
    default:
      return state;
  }
}

export const Creators = {
    addTodo: (text) => ({
      type: Types.ADD,
      text,
    }),
}