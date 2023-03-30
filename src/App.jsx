import './App.css';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmark, BsBookmarkFill, BsBookmarkCheck } from 'react-icons/bs';

const API = "http://localhost:5000";

function App() {
  // consultar o título e atualizar o titulo
  const [title, setTitle] = useState("");
  // consultar o time e atualizar o time de tarefas
  const [time, setTime] = useState("");
  // consultar a lista de tarefas e atualizar a lista de tarefas
  const [todos, setTodos] = useState([]);// lista de tarefas vazia
  // carregar os dados e exibir para o usuario que está sendo carregado algo 
  const [loading, setLoading] = useState(false);

  // função para carregar os dados da API
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const response = await fetch(API + "/todos")
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));

      setLoading(false);
      setTodos(response);
    };
    loadData();
  }, []);

  // função para adicionar uma nova tarefa
  const handleSubmit = async (e) => {
    e.preventDefault();
    // se o titulo estiver vazio, não faça nada
    //if (!title) return;
    // se o titulo não estiver vazio, adicione uma nova tarefa
    //addNewTo_do();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    // Envio para a API
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todo]);

    setTitle("");
    setTime("");
  };

  // função para deletar uma tarefa
  const handleDelete = async (id) => {

    await fetch(API + "/todos" + id, {
      method: "DELETE"
    });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  // função para marcar uma tarefa como concluída
  const handleEdit = async (todo) => {

    todo.done = !todo.done;

    const data = await fetch(API + "/todos" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) =>
      prevState.map((todo) => todo.id === data.id ? (todo = data) : todo));
  };

  if (loading) {
    return <p>Loading...</p>
  }

  // as linhas abaixo, são um exemplo de Contoller Input(limpa o input após o envio )
  //console.log(title);
  //console.log(time);
  //setTitle("");
  //setTime("");
  //console.log("Enviou");


  return (
    <div className="App">
      <div className="todo-header">
        <h1>To Do List - React</h1>
      </div>
      <div className="todo-form">
        <h2>Insira a sua próxima tarefa</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="title">O que você vai fazer?</label>
            <input type="text" name="title" placeholder="Título da tarefa ..."
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""} //crio um controller Input, consigo setar o valor do imput por meio do setTitle, modificando o valor deste Title, para poder limpar o input posteriormente. 
              required
            />
          </div>
          <div className='form-control'>
            <label htmlFor="time">Duração:</label>
            <input type="text" name="time" placeholder="Tempo estimado (em horas)..."
              onChange={(e) => setTime(e.target.value)}
              value={time || ""} //crio um controller Input, consigo setar o valor do imput por meio do setTitle, modificando o valor deste Title, para poder limpar o input posteriormente. 
              required
            />
          </div>
          <input type="submit" value="Criar Tarefa" className="btn" />
        </form>
      </div>
      <div className="todo-list">
        <h2>Lista de Tarefas</h2>
        {todos.length === 0 && <p>Nenhuma tarefa cadastrada</p>}
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duração: {todo.time}</p>
            <div className="todo-actions">
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
