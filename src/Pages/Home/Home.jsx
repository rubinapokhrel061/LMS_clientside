import axios from "axios";
import { Card } from "../Component/Card";
import { Navbar } from "../Component/Navbar";
import { useState, useEffect } from "react";
export const Home = () => {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/book");
    console.log(response.data.data);
    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };
  // console.log(books);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly my-40 ">
        {books.length > 0 &&
          books.map((book) => {
            //   console.log(book);
            return <Card book={book} key={book._id} />;
          })}
      </div>
    </>
  );
};
