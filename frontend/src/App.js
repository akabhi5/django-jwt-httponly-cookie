import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const [csrfToken, setCsrfToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   const getCsrfToken = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8000/csrf/", {
  //         withCredentials: true,
  //       });
  //       const csrfToken = res.headers.get("X-CSRFToken");
  //       // setCsrfToken(csrfToken);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCsrfToken();
  // }, []);

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/login/",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={login}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
