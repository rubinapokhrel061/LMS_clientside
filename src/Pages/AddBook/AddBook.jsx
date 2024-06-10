import axios from "axios";
import { Navbar } from "../Component/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config";
import toast, { Toaster } from "react-hot-toast";
export const AddBook = () => {
  //1st method

  // // const [bookName, setBookName] = useState("");
  // // const [bookPrice, setBookPrice] = useState("");
  // // const [isbnNumber, setIsbnNumber] = useState(null);
  // // const [authorName, setAutherName] = useState("");
  // // const [publishedAt, setPublishedAt] = useState("");
  // // const [publication, setPublication] = useState("");
  // // const [image, setImage] = useState(null);
  // // const handleSubmit = async (e) => {
  // //   e.preventDefault();
  // //   // const response = await axios.post(
  // //   //   "http://localhost:3000/book",
  // //   //   {
  // //   //     bookName,
  // //   //     bookPrice,
  // //   //     isbnNumber,
  // //   //     authorName,
  // //   //     publishedAt,
  // //   //     publication,
  // //   //     image,
  // //   //   },
  // //   //   {
  // //   //     headers: {
  // //   //       "Content-Type": "multipart/form-data",
  // //   //     },
  // //   //   }
  // //   // );
  // //   // another method
  // //   const formData = new formData();
  // //   formData.append("bookName", bookName);
  // //   formData.append("bookPrice", bookPrice);
  // //   formData.append("isbnNumber", isbnNumber);
  // //   formData.append("authorName", authorName);
  // //   formData.append("publishedAt", publishedAt);
  // //   formData.append("publication", publication);
  // //   formData.append("Image", Image);
  // //   const response = await axios.post("http://localhost:3000/book", formData);
  // // };
  // const app

  //2nd method
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publishedAt: "",
    pubilcation: "",
    // bookName,
    // bookPrice,
    // isbnNumber,
    // authorName,
    // publishedAt,
    // publication,
  });

  const [formErr, setFormErr] = useState({
    bookName: "",
    isbnNumber: "",
  });

  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    let inputErr = {
      bookName: "",
      isbnNumber: "",
    };
    try {
      // const imageFile = e.target.image.files[0];

      e.preventDefault();
      if (!data.bookName || !data.isbnNumber) {
        setFormErr({
          ...inputErr,
          bookName: "BookName is required!",
          isbnNumber: "ISBN-Number is required!",
        });
      } else {
        const formData = new FormData();

        //object ma vako key value pair lai array ma convert garxa
        //Object.entries(data)
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append("image", image);
        const response = await axios.post(`${backendUrl}/book`, formData);
        if (response.status === 200) {
          navigate("/");
          toast.success("Book Created Successfully");
        } else {
          toast.error("somthing went wrong");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong ");
    }
  };

  return (
    <>
      <div className="mb-10">
        <Navbar />
      </div>

      <div className="mt-24 border-blue-500 ">
        <div
          className="flex w-screen border-blue-500  flex-col items-center 
        justify-center  mx-auto md:h-screen lg:py-0"
        >
          <div className=" ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2
                className="text-xl font-bold leading-tight text-center
              racking-tight text-[#00ffff] md:text-2xl dark:text-white"
              >
                Add Book
              </h2>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div className="">
                    <label htmlFor="bookName" className="font-medium">
                      Book Name
                    </label>
                    <input
                      type="text"
                      name="bookName"
                      id="bookName"
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      placeholder="Enter Book Name"
                      required=""
                    />
                    {formErr.bookName && (
                      <span className="text-[#e74c3c] text-[14px] mt-[5px] block">
                        {formErr.bookName}
                      </span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="bookPrice" className="font-medium">
                      Book Price
                    </label>
                    <input
                      type="number"
                      name="bookPrice"
                      id="bookPrice"
                      onChange={handleChange}
                      placeholder="Enter bookPrice"
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                  </div>

                  <div>
                    <label htmlFor="isbnNumber" className="font-medium">
                      ISBN Number
                    </label>
                    <input
                      type="number"
                      name="isbnNumber"
                      id="isbnNumber"
                      placeholder="Enter ISBN-Number"
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                    {formErr.isbnNumber && (
                      <span className="text-[#e74c3c] text-[14px] mt-[5px] block">
                        {formErr.isbnNumber}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="authorName" className="font-medium">
                      Auther Name
                    </label>
                    <input
                      type="text"
                      name="authorName"
                      id="authorName"
                      onChange={handleChange}
                      placeholder="Enter authorName"
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                  </div>
                  <div>
                    <label htmlFor="publishedAt" className="font-medium">
                      PublishedAt
                    </label>
                    <input
                      type="date"
                      name="publishedAt"
                      id="publishedAt"
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                  </div>
                  <div>
                    <label htmlFor="publication" className="font-medium">
                      Publication
                    </label>
                    <input
                      name="publication"
                      id="publication"
                      type="text"
                      onChange={handleChange}
                      placeholder="Enter publication"
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex-col">
                  <label htmlFor="imageUrl" className="font-medium">
                    Select Image
                  </label>
                  <input
                    name="image"
                    id="imageUrl"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    placeholder="imageUrl"
                    className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                    required=""
                    accept=".jpg, .jpeg, .png"
                  />

                  <span className="text-[#6bcc5a] text-[12px] mt-[5px] block">
                    Types of image must be jpg, png & jpeg
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full  bg-transparent hover:bg-sky-400 text-xl text-stone-50 font-semibold hover:text-black py-2 px-4 border  border-blue-500 hover:border-transparent rounded-lg "
                >
                  Add book
                </button>
              </form>

              <Toaster />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
