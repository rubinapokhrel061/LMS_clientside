import axios from "axios";
import { Navbar } from "../Component/Navbar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { backendUrl } from "../config";
import toast from "react-hot-toast";
export const EditBook = () => {
  //destructure id
  const { id } = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publishedAt: "",
    publication: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      //object ma vako key value pair lai array ma convert garxa
      //Object.entries(data)
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("image", image);
      const response = await axios.patch(`${backendUrl}/book/${id}`, formData);
      if (response.status === 200) {
        navigate(`/book/${id}`);
        toast.success("Book Created Successfully");
      } else {
        toast.error("somthing went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong ");
    }
  };

  const fetchBook = async () => {
    const response = await axios.get(`${backendUrl}/book/${id}`);
    if (response.status === 200) {
      setData(response.data.data);
      console.log(response.data.data);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <div className="mb-10">
        <Navbar />
      </div>

      <div className="mt-20 border-blue-500 ">
        <div
          className="flex w-screen border-blue-500  flex-col items-center
        justify-center  mx-auto md:h-screen lg:py-0"
        >
          <div className="">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2
                className="text-xl font-bold leading-tight text-center
              racking-tight text-[#00ffff] md:text-2xl dark:text-white"
              >
                Edit Book
              </h2>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="bookName">Book Name</label>
                    <input
                      type="text"
                      name="bookName"
                      value={data.bookName}
                      id="bookName"
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      placeholder="Book Name"
                      required=""
                    />
                  </div>
                  <div>
                    <label htmlFor="bookPrice" className="font-medium">
                      Book Price
                    </label>
                    <input
                      type="number"
                      name="bookPrice"
                      value={data.bookPrice}
                      id="bookPrice"
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      placeholder="bookPrice"
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
                      value={data.isbnNumber}
                      placeholder="isbnNumber"
                      onChange={handleChange}
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                  </div>

                  <div>
                    <label htmlFor="authorName" className="font-medium">
                      Auther Name
                    </label>
                    <input
                      type="text"
                      name="authorName"
                      id="authorName"
                      value={data.authorName}
                      onChange={handleChange}
                      placeholder="authorName"
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
                      value={data.publishedAt}
                      onChange={handleChange}
                      placeholder="publishedAt"
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
                      value={data.publication}
                      onChange={handleChange}
                      placeholder="publication"
                      className="w-full mt-2 px-3 py-2  bg-transparent outline-none border focus:border-sky-300 shadow-sm rounded-lg"
                      required=""
                    />
                  </div>
                </div>
                <div>
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
                  />
                  <span className="text-[#6bcc5a] text-[12px] mt-[5px] block">
                    Types of image must be jpg, png & jpeg
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full  bg-transparent hover:bg-sky-400 text-xl text-stone-50 font-semibold hover:text-black py-2 px-4 border  border-blue-500 hover:border-transparent rounded-lg "
                >
                  Edit book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
