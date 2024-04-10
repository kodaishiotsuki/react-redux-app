import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

// Define the shape of a single todo item
interface Todo {
  text: string;
  completed: boolean;
}

// Define the shape of the state
interface State {
  todos: Todo[];
  filter: string;
  searchTerm: string;
}

// Define the shape of the action
type Action =
  | { type: typeof ADD_TODO; payload: { text: string } }
  | { type: typeof TOGGLE_TODO; payload: { id: number } }
  | { type: typeof REMOVE_TODO; payload: { id: number } }
  | { type: typeof MARK_COMPLETED; payload: { id: number } }
  | { type: typeof MARK_INCOMPLETE; payload: { id: number } }
  | { type: typeof FILTER_TODOS; payload: { filter: string } }
  | { type: typeof UPDATE_SEARCH_TERM; payload: { searchTerm: string } }
  | { type: typeof MARK_ALL_COMPLETED };

const initialState: State = {
  todos: [],
  filter: "ALL",
  searchTerm: "",
};

const todoReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (_todo, index) => index !== action.payload.id
        ),
      };

    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };

    case MARK_INCOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };

    case FILTER_TODOS:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };

    default:
      return state;
  }
};

export default todoReducer;
