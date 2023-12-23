import PropTypes from "prop-types"
import { TiMessages } from "react-icons/ti"
import { Link } from "react-router-dom"

const Orders = ({ user }) => {
  return (
    <section className="p-20">
      <div className=" flex flex-col gap-5 w-full">
        <h1 className=" text-2xl font-bold">Orders</h1>
        <table className="table border-collapse w-full ">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th> {user?.isSeller ? "seller" : "buyer"}</th>
            <th>contact</th>
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
              <Link>
                <div className="bg-emerald-500 rounded-full flex justify-center items-center w-7 h-7">

                <TiMessages className="text-slate-200 w-5 h-5" />
                </div>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default Orders

Orders.propTypes = {
  user: PropTypes.shape({
    isSeller: PropTypes.bool.isRequired,
  }).isRequired,
}
