import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import SingleBook from "./Pages/SingleBook/SingleBook";
import { AddBook } from "./Pages/AddBook/AddBook";
import { EditBook } from "./Pages/EditBook/EditBook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book/:id" element={<SingleBook />}></Route>
        <Route path="/addBook" element={<AddBook />}></Route>
        <Route path="/editBook/:id" element={<EditBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
