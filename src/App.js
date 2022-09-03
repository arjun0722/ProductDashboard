import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import LeftSide from "./Component/LeftSide/LeftSide";
import Add from "./Component/Add/Add";
import { Routes, Route } from "react-router-dom";
import View from "./Component/View/View";
import List from "./Component/List/List";
import Cart from "./Component/Cart/Cart";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <div className="left_Side">
        <LeftSide />
      </div>
      <div className="right_Side">
        
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/view" element={<View />} />
            <Route path="/list" element={<List />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
       
      </div>
      </Provider>
    </div>
  );
}

export default App;
