import AppName from "./components/AppName.jsx";
import AddTask from "./components/AddTask.jsx";
import TaskItem1 from "./components/TaskItem1.jsx";

function App() {

  return <center className={'todo-container p-5'}>
     <AppName />
      <div className="container text-center mt-5">
          <AddTask />
         <TaskItem1 />
         <TaskItem1 />
         <TaskItem1 />
         <TaskItem1 />
         <TaskItem1 />
      </div>
  </center>
}

export default App
