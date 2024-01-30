import { useState } from "react"
import NewRequest from "../utils/GetRequest"
import { useNavigate } from "react-router-dom"
import { useAddData } from "../utils/PostRequest"
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" })
  const navigate = useNavigate()

  const { mutate } = useAddData("auth/login")
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const res = mutate({ username: user.username, password: user.password })
      // const res = await NewRequest.post(`auth/login`, {
      //   username: user.username,
      //   password: user.password,
      // })
      // localStorage.setItem("currentUser", JSON.stringify(res.data))
      // navigate("/")
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>sign in</h1>

        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          placeholder="admin"
          onChange={(e) =>
            setUser((prevState) => ({ ...prevState, username: e.target.value }))
          }
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setUser((prevState) => ({ ...prevState, password: e.target.value }))
          }
        />

        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
