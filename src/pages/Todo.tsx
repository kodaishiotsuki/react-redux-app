import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux"; // ReduxのuseDispatchフックをインポート
import { addTodo } from "../redux/action"; // addTodoアクションクリエーターをインポート

export default function Todo() {
  const dispatch = useDispatch(); // dispatch関数を取得
  const [newTodoText, setNewTodoText] = useState(""); // 新しいTodoテキストの状態を管理

  // 新しいTodoを追加する関数
  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text)); // addTodoアクションをdispatch
  };

  // 追加ボタンがクリックされた時の処理
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      // テキストが空白でない場合
      handleAddTodo(newTodoText.trim()); // Todoを追加
      setNewTodoText(""); // 入力フィールドをクリア
    }
  };

  // コンポーネントのJSXを返す
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        Todo App
      </h2>

      {/* 入力フィールドと追加ボタン */}
      <div className="flex items-center mb-4">
        <input
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)} // 入力値の変更を処理
          type="text"
          name="text"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300  focus:border-blue-500 outline-none"
        />
        <button
          onClick={handleAddTodoClick} // クリック時にTodoを追加
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <BsPlus /> {/* プラスアイコン */}
        </button>
      </div>
    </div>
  );
}
