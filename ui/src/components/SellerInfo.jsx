import { FaStar } from "react-icons/fa6";

const SellerInfo = () => {
  return (
    <div className=" flex flex-col gap-2 mt-10">
      <h4 className=" text-2xl font-medium">About The seller</h4>
      <div className="flex items-center gap-2">
        <img
          className="w-20 h-20 rounded-2xl object-cover"
          src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        {/* info */}
        <div className="flex flex-col gap-1">
          <span className="font-medium">Anna Bell</span>
          <div className="flex text-amber-400 gap-1 mb-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className="text-center py-1 px-2 border-2 rounded-md font-medium hover:bg-green-600 hover:text-creamson hover:border-transparent">
            Contact me
          </button>
        </div>
      </div>
      {/* box  */}
      <div className=" border p-3 flex flex-col gap-3">
        <div className="grid grid-rows-3 grid-flow-col gap-4 ">
          <div className="item">
            <span className="title">From</span>
            <span className="desc">USA</span>
          </div>
          <div className="item">
            <span className="title">Member since</span>
            <span className="desc">Aug 2022</span>
          </div>
          <div className="item">
            <span className="title">Avg. response time</span>
            <span className="desc">4 hours</span>
          </div>
          <div className="item">
            <span className="title">Avg. response time</span>
            <span className="desc">4 hours</span>
          </div>
          <div className="item">
            <span className="title">Languages</span>
            <span className="desc">English</span>
          </div>
        </div>
        <hr />
        <p>
          My name is Anna, I enjoy creating AI generated art in my spare time. I
          have a lot of experience using the AI program and that means I know
          what to prompt the AI with to get a great and incredibly detailed
          result.
        </p>
      </div>
      
    </div>
  );
};

export default SellerInfo;
