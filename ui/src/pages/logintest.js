import { useEffect, useState } from "react";
import { useMutate } from "../utils/UseFeatchData";
import axios from "axios";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState("");
  const [omg, setImg] = useState("");

  const mutation = useMutate(
    "user",
    "auth/login",
    (data) => {
      return data;
    },
    (error) => {
      return error;
    }
  );
  // console.log("data", mutation.isSuccess ? mutation : "");
  const handleSubmit = async (e) => {
    console.log(icon);
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:8800/banks", {
        withCredentials: true,
        headers: { "accept-language": "en" },
      });
      // const res = await axios.post(
      //   "http://localhost:8800/auth/login",
      //   { username, password },
      //   { withCredentials: true }
      // );
      // const formdate = new FormData();
      // formdate.append("icon", icon);
      // const res = await axios.post(
      //   "http://localhost:8800/banks/create",
      //   formdate,
      //   {
      //     withCredentials: true,
      //     headers: { "accept-language": "en" },
      //   }
      // );
      setImg(res.data.data[0].Icon);
      console.log("res", res.data.data[0].Icon);
    } catch (e) {
      console.log("error", e.response.data);
    }
    // mutation.mutate({ username, password });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8800/banks", {
        withCredentials: true,
        headers: { "accept-language": "en" },
      })
      
      .then((res) => 
      {
        console.log('data',`http://localhost:8800${res.data.data[0].Icon}`)
        setImg(res.data.data[0].Icon)}).catch(err=>console.log(err));
  });
  return (
    <div>
      <form onSubmit={handleSubmit} className=" text-center " action="">
        <img src={`http://localhost:8800${omg}`} alt="Embedded Image" />
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
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => setIcon(e.target.files[0])}
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Logging in..." : "Login"}
        </button>{" "}
      </form>
      <h1>{}</h1>
    </div>
  );
};

export default Login;
