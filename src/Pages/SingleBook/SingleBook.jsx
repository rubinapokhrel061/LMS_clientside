import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../Component/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "./SingleBook.css";
import { backendUrl } from "../config";

const SingleBook = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  console.log(id);
  const fetchBook = async () => {
    const response = await axios.get(`${backendUrl}/book/${id}`);
    if (response.status === 200) {
      setBook(response.data.data);
    }
  };

  const DeleteBook = async () => {
    const response = await axios.delete(`${backendUrl}/book/${id}`);

    if (response.status === 200) {
      navigate("/");
    } else console.log("something went wrong");
  };

  // console.log(books);
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="w-full h-[50px] ">
        <Navbar />
      </div>
      <div className=" rounded-xl px-10 ">
        <div>
          <img
            className="w-screen mt-24 h-[250px] md:h-[750px] rounded-lg"
            src={
              book.imageUrl
                ? book.imageUrl
                : "https://www.abnews24bd.com/images/page-not-found.jpg"
            }
            alt={book.bookName}
          />
          <div className=" py-6  ">
            {/* <div className="book-details">
              <h2>Book Name :</h2>
              <h3> {book.bookName}</h3>
            </div>
            <div className="book-details ">
              <h2>Book Price :</h2>
              <h3> Rs.{book.bookPrice}</h3>
            </div>

            <div className="book-details">
              <h2>Book Number :</h2>
              <h3>{book.isbnNumber}</h3>
            </div>
            <div className="book-details">
              <h2>Author Name :</h2>
              <h3>{book.authorName}</h3>
            </div>
            <div className="book-details">
              <h2> Publication : </h2>
              <h3> {book.publication}</h3>
            </div>
            <div className="book-details">
              <h2>Published Date :</h2>
              <h3>{book.publishedAt}</h3>
            </div> */}

            <table className="text-sm md:text-lg ">
              <tr>
                <td>Book Name :</td>
                <td>{book.bookName}</td>
              </tr>
              <tr>
                <td>Book Price :</td>
                <td>Rs.{book.bookPrice}</td>
              </tr>
              <tr>
                <td width="100px">ISBN Number :</td>
                <td>{book.isbnNumber}</td>
              </tr>
              <tr>
                <td>Book Name :</td>
                <td>{book.bookName}</td>
              </tr>
              <tr>
                <td width="100px">Author Name :</td>
                <td>{book.authorName}</td>
              </tr>
              <tr>
                <td>Publication :</td>
                <td>{book.publication}</td>
              </tr>
              <tr>
                <td width="120px" className="md:w-[150px]">
                  Published Date :
                </td>
                <td>{book.publishedAt}</td>
              </tr>
            </table>
          </div>
          <div className="flex gap-3 mb-5">
            <Link to={`/editBook/${book._id}`}>
              <button className=" w-[7rem] md:w-[10rem] h-10  bg-transparent hover:bg-sky-400 text-sm md:text-xl text-stone-50 font-semibold hover:text-black py-1 px-3  border  border-blue-500 hover:border-transparent rounded-lg">
                Edit Book
              </button>
            </Link>
            <button
              onClick={DeleteBook}
              className="w-[7rem] md:w-[10rem] h-10  bg-transparent hover:bg-sky-400 text-sm md:text-xl text-stone-50 font-semibold hover:text-black py-1 px-3 border  border-blue-500 hover:border-transparent rounded-lg"
              // className=" w-[10rem] mb-5 bg-transparent hover:bg-sky-400 text-xl text-stone-50 font-semibold hover:text-black py-2 px-4 border  border-blue-500 hover:border-transparent rounded-lg"
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleBook;
