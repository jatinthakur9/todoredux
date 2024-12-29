import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "Play Cricket ", completed: true },
  { id: "2", title: "Edit Videos  ", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state) => {
      return state;
    },

    removeTodo: (state) => {
      return state;
    },

    toggleCompleted: (state) => {
      return state;
    },
  },
});

const todosReducer = todosSlice.reducer;
export default todosReducer;
