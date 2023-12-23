const NewGig = () => {
  return (
    <div className=" add p-20 w-full ">
      <h1 className=" text-2xl font-medium mb-5">add new gig</h1>
      <div className="grid grid-cols-6 gap-20 items-center">
        <div className="col-span-5 md:col-span-3 flex flex-col gap-4 self-start	">
          <label>title</label>
          <input
            className=""
            type="text"
            placeholder="e.g. I will do something I'm really good at"
          />
          <label htmlFor="cats">category</label>
          <select name="cats" id="cats" className="">
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
          <label htmlFor="">Cover Image</label>
          <input type="file" />
          <label htmlFor="">Upload Images</label>
          <input type="file" multiple />
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            placeholder="Brief descriptions to introduce your service to customers"
            cols="0"
            rows="16"
          ></textarea>
        </div>
        {/* right */}
        <div className=" col-span-5 md:col-span-3 flex flex-col gap-4 self-start	">
          <label htmlFor="">Service Title</label>
          <input type="text" placeholder="e.g. One-page web design" />
          <label htmlFor="">Short Description</label>
          <textarea
            name=""
            id=""
            placeholder="Short description of your service"
            cols="30"
            rows="10"
          ></textarea>
          <label htmlFor="">Delivery Time (e.g. 3 days)</label>
          <input type="number" />
          <label htmlFor="">Revision Number</label>
          <input type="number" />
          <label htmlFor="">Add Features</label>
          <input type="text" placeholder="e.g. page design" />
          <input type="text" placeholder="e.g. file uploading" />
          <input type="text" placeholder="e.g. setting up a domain" />
          <input type="text" placeholder="e.g. hosting" />
          <label htmlFor="">Price</label>
          <input type="number" />
        </div>
        {/* left */}
        <div className="col-span-6  flex justify-center items-center w-full">
          <button className="w-1/2 text-white py-2 px-4 bg-green-600 rounded-md hover:bg-green-700 text-xl capitalize">
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewGig
