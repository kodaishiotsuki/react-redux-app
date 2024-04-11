// Redux ToolkitからcreateSliceとPayloadActionをインポート
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Todoアイテムの型定義
interface Todo {
  text: string;
  completed: boolean;
}

// Todoリストの状態を管理する型定義
interface TodoState {
  todos: Todo[];
  filter: string;
  searchTerm: string;
}

// 状態の初期値
const initialState: TodoState = {
  todos: [],
  filter: "ALL",
  searchTerm: "",
};

// createSliceを使用してTodoリストのスライスを定義
const todoSlice = createSlice({
  name: "todo", // スライスの名前
  initialState, // 初期状態
  reducers: {
    // リデューサーと対応するアクション
    // 新しいTodoを追加
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      state.todos.push({ text: action.payload.text, completed: false });
    },
    // Todoの完了／未完了を切り替え
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.todos[action.payload.id];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Todoを削除
    removeTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todos.splice(action.payload.id, 1);
    },
    // Todoを完了済みとしてマーク
    markCompleted: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.todos[action.payload.id];
      if (todo) {
        todo.completed = true;
      }
    },
    // Todoを未完了としてマーク
    markIncomplete: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.todos[action.payload.id];
      if (todo) {
        todo.completed = false;
      }
    },
    // フィルターを設定
    filterTodos: (state, action: PayloadAction<{ filter: string }>) => {
      state.filter = action.payload.filter;
    },
    // 検索用キーワードを更新
    updateSearchTerm: (
      state,
      action: PayloadAction<{ searchTerm: string }>
    ) => {
      state.searchTerm = action.payload.searchTerm;
    },
    // すべてのTodoを完了済みとしてマーク
    markAllCompleted: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = true;
      });
    },
  },
});

// アクションクリエーターをエクスポート
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  filterTodos,
  updateSearchTerm,
  markAllCompleted,
} = todoSlice.actions;

// リデューサーをエクスポート
export default todoSlice.reducer;
