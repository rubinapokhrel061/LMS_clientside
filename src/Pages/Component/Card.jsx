import { Link } from "react-router-dom";

export const Card = ({ book }) => {
  console.log(book);
  return (
    <>
      <div
        className="max-w-sm pb-4 w-[384px] rounded-xl overflow-hidden shadow-lg shadow-cyan-300 mb-20 "
        key={book._id}
      >
        <img
          className="w-full  h-[233px]"
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://www.abnews24bd.com/images/page-not-found.jpg"
          }
          alt={book.bookName}
        />
        <div className="px-6 py-4  ">
          <div className="font-bold text-xl mb-2">{book.bookName}</div>
          <p className="text-slate-400 text-base">{book.isbnNumber}</p>
          <p className="text-slate-400 text-base">{book.authorName}</p>
          <p className="text-slate-400 text-base">{book.publishedAt}</p>
        </div>
        <Link
          to={`/book/${book._id}`}
          className="text-black px-3 py-1 ml-4
           bg-gradient-to-r from-cyan-500 to-sky-900 hover:bg-gradient-to-bl font-medium rounded-xl text-sm text-center   "
        >
          See More
        </Link>
        {/* //another method */}
        {/* <buttton onClick={()=>Navigate('/book')}>see more
        </buttton> */}
      </div>
    </>
  );
};
