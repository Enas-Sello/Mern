import { useState } from "react";
import { useApiMutation } from "../utils/UseFeatchData";
import {useNavigate} from "react-router";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const useLoginMutation = () => {
    return useApiMutation("auth/login");
  };

  const loginMutation = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginMutation.mutateAsync({ username, password });
      localStorage.setItem("currentUser", JSON.stringify(res));
      navigate("/");
    } catch (e) {
      console.log("error", e.response.data.error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=" text-center " action="">
        <h1>sign in</h1>
        <label htmlFor="username">user name</label>
        <input
          className=" border-2"
          type="text"
          name="username"
          placeholder="user name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          className=" border-2"
          type="password"
          name="password"
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginMutation.isError && (
          <p>{loginMutation.error.response.data.error}</p>
        )}
        <button type="submit" disabled={loginMutation.isLoading}>
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
