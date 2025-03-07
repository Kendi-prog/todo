import React, {useState, useEffect} from "react";

import TaskItem from "../task-item/task-item.component";
import { 
    DateContainer, 
    ListContainer, 
    Title, 
    NoTasksWrapper, 
    CalendarContainer 
} from "./task-management.styles";
import Calendar from "../calendar/calendar.component";
import task2 from "../../../assets/task2.jpeg";

const TaskManagement = ({ tasks, onDelete, onUpdate, onToggleComplete, editingTask, setEditingTask }
    ) => {
   const [selectedDate, setSelectedDate] = useState(new Date());

   const handleSelectedDate = (date) => {
        setSelectedDate(date);
   }

   const selectedDateString = selectedDate.toISOString().split("T")[0];

   const filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.startDate).toISOString().split("T")[0];
        const selectedFormattedDate = selectedDate.toISOString().split("T")[0];

        console.log("📌 Task from Database:", taskDate);
        console.log("📌 Selected Date:", selectedFormattedDate);

        return taskDate === selectedFormattedDate;
    });

    console.log("✅ Filtered Tasks:", filteredTasks);


    useEffect(() => {
        console.log("Selected Date:", selectedDateString);
        console.log("Filtered Tasks:", filteredTasks);
    }, [selectedDate, tasks, filteredTasks, selectedDateString]);

    return(
        <div>
            <DateContainer>
                <span>Today's Schedule</span>
                <span>{selectedDate.toDateString()}</span> 
            </DateContainer>
            <CalendarContainer>
                <Calendar onDateSelect={handleSelectedDate}/>
            </CalendarContainer>
            <ListContainer>
                {filteredTasks.length > 0 && <Title>Task</Title>}
                {filteredTasks.length > 0 ? (
                    filteredTasks.map( task => (
                        <TaskItem 
                            key={task.id}
                            task={task}
                            onEdit={onUpdate}
                            onDelete={onDelete}
                            onToggleComplete={onToggleComplete}
                            isEditing={editingTask && editingTask.id === task.id}
                            setEditingTask={setEditingTask}
                        />  
                    ))) : (
                            <NoTasksWrapper>
                                <img src={task2} alt="No tasks available" />
                                <p>No Tasks Available</p>
                            </NoTasksWrapper>
                    )}
            </ListContainer>
        </div>
    );
}

export default TaskManagement;