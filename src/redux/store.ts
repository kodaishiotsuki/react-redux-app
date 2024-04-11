// Redux ToolkitからconfigureStoreをインポート
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice"; // slice.tsからtodoReducerをインポート

// ストアを設定
const store = configureStore({
  reducer: {
    todo: todoReducer, // todoReducerをtodoスライスのリデューサーとして設定
  },
});

// ストアをエクスポート
export default store;
