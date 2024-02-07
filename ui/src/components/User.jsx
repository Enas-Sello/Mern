import { FaStar, FaUser } from "react-icons/fa6"
import { useApiQuery } from "../utils/UseFeatchData"
import Loading from "./Loading"
import Error from "./Error"
import { GiPirateFlag } from "react-icons/gi"

const User = ({ id, imgStyle, nameStyle, country = false, rating = false }) => {
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useApiQuery(`user${id}`, `user/single/${id}`)
  console.log("ll", user)

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error error={error} />}
      {user && (
        <>
          {user.img ? (
            <img className={imgStyle} src={user.img} alt="" />
          ) : (
            <FaUser />
          )}
          {!country && <p className={nameStyle}>{user.username}</p>}
          {country && (
            <div className="flex gap-1 items-center text-sm text-gray-600">
              <p className={nameStyle}>{user.username}</p>
              <GiPirateFlag className=" text-teal-600" />
              united States
            </div>
          )}
        </>
      )}
    </>
  )
}

export default User
