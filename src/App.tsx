import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Provider>
  );
}

export default App;
