import React, {useEffect, useState} from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

import TaskManagement from "../task-management/task-management.component";
import TaskInput from "../task-input/task-input.component";
import { TodoMainContainer, TaskInputArea, TaskListArea, AnalyticsArea } from "./todo-main.styles";
import TaskCategory from "../task-category/task-category.component";
import { db } from "../../../utils/firebase";
import Analytics from "../analytics/analytics.component";

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);


    const addTask = async (newTask) => {
      try {
        const docRef = await addDoc(collection(db, "tasks"), {
          ...newTask,
          completed: false,
          createdAt: new Date()
        });

        console.log("Task added with ID: ", docRef.id);
        fetchTasks();
       
      } catch (e) {
        console.error("Error adding task: ", e);
      }
    }

    const deleteTask = async (taskId) => {
      try {
        await deleteDoc(doc(db, "tasks", taskId));
        fetchTasks();
      } catch (e) { 
        console.error("Error deleting task: ", e);
      }     
    }


    const fetchTasks = async () => {
      try {
        const querySnapShot = await getDocs(collection(db, "tasks"));
        const tasksData = querySnapShot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setTasks(tasksData);
      } catch (e) {
        console.error("Error fetching tasks: ", e);
      }
    }


    useEffect(() => {
      fetchTasks();
    }, []);

  
    const updateTask = (id, updatedTask) => {
      setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
      setEditingTask(null);
    };

    const toggleTaskCompletion = async  (taskId, currentStatus) => {
      try {
        const taskRef = doc(db, "tasks", taskId);
        await updateDoc(taskRef, { completed: !currentStatus});
        fetchTasks();
      } catch (e) {
        console.error("Error updating task: ", e);
      }
    }

    return(
      <TodoMainContainer>
        <TaskInputArea>
          <TaskCategory tasks={tasks}/>
          <TaskInput addTask={addTask}/>
        </TaskInputArea>
        <TaskListArea>
          <TaskManagement 
            tasks={tasks}
            onDelete={deleteTask}
            onUpdate={updateTask}
            onToggleComplete={toggleTaskCompletion}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
          />
        </TaskListArea>
        <AnalyticsArea>
          <Analytics tasks={tasks}/>
        </AnalyticsArea>
      </TodoMainContainer>
        
    );
}

export default ToDo;