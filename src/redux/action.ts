// actionTypesから各アクションタイプをインポート
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

// 新しいTODOを追加するアクションクリエーター
export const addTodo = (text: string) => ({
  type: ADD_TODO, // アクションタイプ
  payload: { text }, // アクションのペイロード（データ）
});

// 特定のTODOの完了／未完了の状態を切り替えるアクションクリエーター
export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

// 特定のTODOを削除するアクションクリエーター
export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: { id },
});

// 特定のTODOを完了済みとしてマークするアクションクリエーター
export const markCompleted = (id: number) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

// 特定のTODOを未完了としてマークするアクションクリエーター
export const markIncomplete = (id: number) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

// TODOリストのフィルターを設定するアクションクリエーター
export const filterTodos = (filter: string) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

// すべてのTODOを完了済みとしてマークするアクションクリエーター
export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

// 検索用のキーワードを更新するアクションクリエーター
export const updateSearchTerm = (searchTerm: string) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
