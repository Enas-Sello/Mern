import { useState } from "react"

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(e)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <div className="w-full h-full mt-16 p-16 flex justify-center items-center ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col p-3 items-center"
      >
        <div className="flex flex-col lg:flex-row gap-3 w-full justify-evenly items-center">
          <div className="p-8 border rounded-lg w-full h-[650px] lg:w-1/2 flex flex-col gap-3">
            <h1 className=" text-violet-500 text-3xl font-bold mb-7">
              create a new account
            </h1>
            <label htmlFor="username" className="text-gray-600 text-lg">
              user name
            </label>
            <input
              className="border rounded-sm px-6 py-3 outline-none "
              type="text"
              name="username"
              placeholder="admin"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />
            <label htmlFor="username" className="text-gray-600 text-lg">
              e-mail
            </label>
            <input
              className="border rounded-sm px-6 py-3 outline-none "
              type="text"
              name="E-mail"
              placeholder="admin"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />

            <label htmlFor="password" className="text-gray-600 text-lg">
              Password
            </label>
            <input
              className="border rounded-sm px-6 py-3 outline-none"
              type="password"
              name="password"
              placeholder="******"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />

            <label htmlFor="password" className="text-gray-600 text-lg">
              profile picture
            </label>
            <input
              className="border rounded-sm px-6 py-3 outline-none"
              type="file"
              name="password"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
            <label htmlFor="password" className="text-gray-600 text-lg">
              country
            </label>
            <input
              className="border rounded-sm px-6 py-3 outline-none"
              type="text"
              name="password"
              placeholder="Egypt"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <div className="p-8 border rounded-lg w-full h-[650px] lg:w-1/2 flex flex-col gap-3">
            <h2 className=" text-violet-500 text-3xl font-bold mb-10">
              i want to became a seller
            </h2>
            <div className="mb-7">
              <label htmlFor=""> activate the seller account</label>
            </div>
            <label htmlFor="username" className="text-gray-600 text-lg ">
              phone number
            </label>
            <input
              className="border rounded-sm px-6 py-3 outline-none mb-6"
              type="text"
              name=""
              placeholder="+20 01020356669"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
            />

            <label htmlFor="password" className="text-gray-600 text-lg">
              description
            </label>
            <textarea
              className="border rounded-sm px-6 py-3 outline-none"
              name="password"
              placeholder="A short description of yourSelf"
              onChange={(e) =>
                setUser((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <button
          className=" bg-violet-500 text-white py-3 px-6 w-1/3 rounded-sm text-xl mt-7"
          type="submit"
        >
          register
        </button>
      </form>
    </div>
  )
}

export default Register
