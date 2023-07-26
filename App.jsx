import "./App.css";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

function App() {
  const FECHA = new Date();
  fecha.innerHTML = FECHA.toLocaleDateString("es-MX", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <>
      <div className="card-to-do">
        <h1>Hola,Tareas J@F </h1>
        <h2> Organizando mis tareas</h2>

        <div className="counter-todos">
          <h3>
            Tareas Adjuntas: <span>{todosCount}</span>
          </h3>
          <h3>
            Pendientes: <span>{pendingTodosCount}</span>
          </h3>
        </div>

        <div className="add-todo">
          <h3>Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>
    </>
  );
}

export default App;
