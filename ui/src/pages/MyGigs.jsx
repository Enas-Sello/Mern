import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const MyGigs = () => {
  return (
    <section className="p-20">
      <div className=" flex flex-col gap-5 w-full">
        <div className="flex item-center justify-between items-center">
          <h1 className=" text-2xl font-bold">Gigs</h1>
          <Link
            to={"/add"}
            className="text-center py-1 px-2 rounded-sm capitalize font-medium bg-green-600 text-creamson border-transparent hover:bg-white border hover:border-gray-300"
          >
            add new gig
          </Link>
        </div>
        <table className="table border-collapse w-full ">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="w-16 h-8 object-contain"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>13</td>
            <td>
              <MdDelete className="text-red-600 w-5 h-5" />
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default MyGigs;
