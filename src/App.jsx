import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter } from "react-router-dom";
import RoutingIndex from "./Routing/RoutingIndex";
import Header from "./Component/Header";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <RoutingIndex />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
