import "./App.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  async function createUser() {
    const response = await axios.post("http://server:8080/user", {
      Email: inputValueEmail,
      password: inputValuepassword,
    });
    const data = await response.data;

    window.localStorage.setItem("token", data);

    setInputValueEmail("");
    setInputValuepassword("");
    window.location.href = "/home";
  }
  const [inputValueEmail, setInputValueEmail] = useState();
  const [inputValuepassword, setInputValuepassword] = useState();
  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Login</h1>
        </div>
        <input
          placeholder="Email"
          value={inputValueEmail}
          onChange={(event) => {
            setInputValueEmail(event.target.value);
          }}
          required
        ></input>
        <br></br>
        <input
          placeholder="Senha"
          value={inputValuepassword}
          onChange={(event) => {
            setInputValuepassword(event.target.value);
          }}
          required
        ></input>
        <button className="newTaskButton" onClick={createUser}>
          Entrar
        </button>
      </header>
    </div>
  );
}
export default Login;
