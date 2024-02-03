import { useState } from "react";
import { useApiMutation } from "../utils/UseFeatchData";

const NewGig = () => {
  const [gig, setGig] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    cover: null,
    images: null,
    shortTitle: "",
    shortDesc: "",
    deliveryTime: "",
    revisionNumber: "",
    features: [],
  });
  const useCreateMutation = () => {
    return useApiMutation("gig/create");
  };

  const createMutation = useCreateMutation();

  const handleChange = async (e) => {
  
    const { name, value, type } = e.target;
    if (type === "file") {
      setGig((prevFormData) => ({
        ...prevFormData,
        [name]: e.target.files,
      }));
    } else if (name === "features") {
      setGig((prevFormData) => ({
        ...prevFormData,
        features: [...prevFormData.features, value],
      }));
    } else {
      setGig((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handelCreate = (e) => {
    e.preventDefault();
    console.log("Submitted data:", gig);
  };

  return (
    <div className=" add p-20 w-full ">
      <h1 className=" text-2xl font-medium mb-5">add new gig</h1>
      <form
        onSubmit={handelCreate}
        className="grid grid-cols-6 gap-20 items-center"
      >
        {/* right */}

        <div className="col-span-5 md:col-span-3 flex flex-col gap-4 self-start	">
          <label>title</label>
          <input
            name="title"
            onChange={handleChange}
            value={gig.title}
            type="text"
            placeholder="e.g. I will do something I'm really good at"
          />
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            className=""
            onChange={handleChange}
          >
            <option className="" value="design">
              Design
            </option>
            <option className="" value="web">
              Web Development
            </option>
            <option className="" value="animation">
              Animation
            </option>
            <option className="" value="music">
              Music
            </option>
          </select>
          <label htmlFor="cover">Cover Image</label>
          <input
            name="cover"
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="">Upload Images</label>
          <input
            name="images"
            type="file"
            multiple
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            id=""
            placeholder="Brief descriptions to introduce your service to customers"
            cols="0"
            rows="16"
            name="description"
            value={gig.description}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* left */}
        <div className=" col-span-5 md:col-span-3 flex flex-col gap-4 self-start	">
          <label htmlFor="">Service Title</label>
          <input
            name="shortTitle"
            value={gig.shortTitle}
            onChange={handleChange}
            type="text"
            placeholder="e.g. One-page web design"
          />
          <label htmlFor="">Short Description</label>
          <textarea
            value={gig.shortDesc}
            name="shortDesc"
            id=""
            placeholder="Short description of your service"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
          <label htmlFor="">Delivery Time (e.g. 3 days)</label>
          <input
            name="deliveryTime"
            value={gig.deliveryTime}
            onChange={handleChange}
            type="number"
          />
          <label htmlFor="">Revision Number</label>
          <input
            name="revisionNumber"
            value={gig.revisionNumber}
            onChange={handleChange}
            type="number"
          />
          <label htmlFor="">Add Features</label>
          <input
            name="features"
            value={gig.features}
            onChange={handleChange}
            type="text"
            placeholder="e.g. page design"
          />
          <input
            name="features"
            value={gig.features}
            onChange={handleChange}
            type="text"
            placeholder="e.g. file uploading"
          />
          <input
            name="features"
            value={gig.features}
            onChange={handleChange}
            type="text"
            placeholder="e.g. setting up a domain"
          />
          <input
            name="features"
            value={gig.features}
            onChange={handleChange}
            type="text"
            placeholder="e.g. hosting"
          />
          <label htmlFor="">Price</label>
          <input
            name="price"
            value={gig.price}
            onChange={handleChange}
            type="number"
          />
        </div>
        <div className="col-span-6  flex justify-center items-center w-full">
          <button
            type="submit"
            className="w-1/2 text-creamson py-2 px-4 bg-secondary rounded-md hover:bg-main text-xl capitalize"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGig;
