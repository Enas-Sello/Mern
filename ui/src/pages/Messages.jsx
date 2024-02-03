import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

const Messages = ({ user }) => {
  return (
    <section className="p-20">
      <div className=" flex flex-col gap-5 w-full text-sm md:text-base">
        <h1 className=" text-2xl font-bold">Messages</h1>
        <table className="table border-collapse w-full ">
          <tr>
            <th> {user?.isSeller ? "seller" : "buyer"}</th>
            <th>last message</th>
            <th>date</th>
            <th>action</th>
          </tr>
          <tr>
            <td>Charley Sharp</td>
            <td>
              <Link to="/message/123" className="">
                {message.substring(0, 15)}...
              </Link>
            </td>
            <td>1 hour ago</td>
            <td>
              <button className="text-center py-1 px-2 rounded-sm capitalize font-medium bg-green-600 text-creamson border-transparent">
                mark as read
              </button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Messages;

Messages.propTypes = {
  user: PropTypes.shape({
    isSeller: PropTypes.bool.isRequired,
  }).isRequired,
};
