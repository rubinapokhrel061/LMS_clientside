import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-[#060417] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className=" flex flex-wrap items-center justify-between m-3 p-3  ">
          <div className=" w-[10rem] text-2xl md:w-[14rem] h-auto md:text-4xl">
            <h1>Book Store</h1>
          </div>
          <Link to="/addBook">
            <button className=" w-[7rem] md:w-[10rem] h-10  bg-transparent hover:bg-sky-400 text-base md:text-xl text-stone-50 font-semibold hover:text-black py-1 px-3 border  border-blue-500 hover:border-transparent rounded-lg">
              Add Book
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};
