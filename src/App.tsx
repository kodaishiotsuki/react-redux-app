import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // または適切なルーターコンポーネントをインポート
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
