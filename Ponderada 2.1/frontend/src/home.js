import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const Todos = ({ todos }) => {
    return (
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todo">
              <p>
                Nome: {todo.Name} <br></br>Preço: R${todo.Price}
              </p>
              <button onClick={() => hadleEditButton(todo)}>
                <AiOutlineEdit size={20}></AiOutlineEdit>
              </button>
              <button onClick={() => deleteTodo(todo)}>
                <AiOutlineDelete size={20}></AiOutlineDelete>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  async function handleNewButton() {
    setInputVisibility(!inputVisibility);
  }

  async function getTodos() {
    const response = await axios.get("http://localhost:8000/produtos", {
      headers: { "Content-Type": "application/json" },
    });
    setTodos(response.data);
  }
  async function deleteTodo(todo) {
    const token = window.localStorage.getItem("token");
    console.log(todo.id);
    await axios.delete(`http://localhost:8000/produtos/${todo.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    getTodos();
  }
  async function createTodo() {
    const token = window.localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:8000/produtos",

      {
        Name: inputValueProduto,
        Price: parseInt(inputValuePreco),
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    getTodos();
    setInputVisibility(!setInputVisibility);
    setInputValuePreco("");
    setInputValueProduto("");
  }
  async function hadleEditButton(todo) {
    setSelectedTodo(todo);
    setInputVisibility(true);
  }
  async function editTodo() {
    const token = window.localStorage.getItem("token");

    await axios.put(
      "http://localhost:8000/produtos",
      {
        id: selectedTodo.id,
        Name: inputValueProduto,
        Price: parseInt(inputValuePreco),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setSelectedTodo();
    setInputVisibility(false);
    getTodos();
    setInputValueProduto("");
    setInputValuePreco("");
  }

  const [todos, setTodos] = useState([]);
  const [inputValueProduto, setInputValueProduto] = useState("");
  const [inputValuePreco, setInputValuePreco] = useState();
  const [inputVisibility, setInputVisibility] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Produtos</h1>
        </div>
        <Todos todos={todos}></Todos>
        <input
          placeholder="Produto"
          value={inputValueProduto}
          style={{ display: inputVisibility ? "block" : "none" }}
          onChange={(event) => {
            setInputValueProduto(event.target.value);
          }}
          className="inputName"
        ></input>
        <input
          placeholder="Preço"
          value={inputValuePreco}
          style={{ display: inputVisibility ? "block" : "none" }}
          onChange={(event) => {
            setInputValuePreco(event.target.value);
          }}
          className="inputName"
        ></input>
        <button
          onClick={
            inputVisibility
              ? selectedTodo
                ? editTodo
                : createTodo
              : handleNewButton
          }
          className="newTaskButton"
        >
          {inputVisibility ? "Confirmar" : "Novo produto"}
        </button>
      </header>
    </div>
  );
}

export default HomePage;
