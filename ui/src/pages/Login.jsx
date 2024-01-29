import { useState } from "react"
import NewRequest from "../utils/NewRequest"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" })
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await NewRequest.post(`auth/login`, {
        username: user.username,
        password: user.password,
      })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
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
