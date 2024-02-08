import { useState } from "react";
import { useApiMutation } from "../utils/UseFeatchData";
import { useNavigate } from "react-router";

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
    <div className="login w-full h-screen p-16 flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="p-8 border rounded-lg flex flex-col gap-3 w-1/2 lg:w-1/4 items-center "
        action=""
      >
        <h1 className=" text-white text-3xl font-bold mb-7">sign in</h1>
        <label className="text-white text-lg" htmlFor="username">
          user name
        </label>
        <input
          className="border rounded-sm px-4 py-3 outline-none"
          type="text"
          name="username"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="text-white text-lg" htmlFor="password">
          password
        </label>
        <input
          className="border rounded-sm px-4 py-3 outline-none"
          type="password"
          name="password"
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className=" bg-secondary border hover:bg-primary text-white py-3 w-full rounded-md text-xl mt-7"
          type="submit"
          disabled={loginMutation.isLoading}
        >
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </button>
        {loginMutation.isError && (
          <p className="text-red-400 text-base">
            {loginMutation.error.response.data.error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
