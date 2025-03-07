import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { X } from "lucide-react";

import { 
    CompleteTaskIcon, 
    DeleteIcon, 
    HiddenSpace,  
    TaskContainer, 
    TaskItemContainer, 
    TaskName, 
    TaskStartTime,
    NotificationContainer,
    CloseButton
} from "./task-item.styles";


const TaskItem = ({ task, onDelete, onToggleComplete }) => 
{

    const [notification, setNotification] = useState(null);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
        }, 5000);
    }

    return(
        <TaskItemContainer >
            <TaskStartTime>
                {task.startTime}
            </TaskStartTime>
            <TaskContainer category={task.category}>
                <TaskName>
                    {task.task}
                </TaskName>
                <p><strong>Notes:</strong>{task.notes}</p>
            </TaskContainer>
            <CompleteTaskIcon 
                completed={task.completed} 
                onClick={
                    () => {
                        onToggleComplete(task.id);
                        showNotification(`Task ${task.task} completed!`);
                }}>
                <IoCheckmarkDoneCircleOutline />
            </CompleteTaskIcon>
            {task.completed ? (
                <HiddenSpace />
            ) : (
                <DeleteIcon 
                    completed={task.completed} 
                    onClick={
                        () => {
                            onDelete(task.id);
                            showNotification(`Task ${task.task} deleted!`);
                    }}> 
                    <MdOutlineCancel />
                </DeleteIcon> 
            )} 

            {notification && (
                <NotificationContainer>
                    <span>{notification}</span>
                    <CloseButton onClick={() => showNotification(null)}><X size={20} /></CloseButton>
                </NotificationContainer>
            )}
            
        </TaskItemContainer>
    );
}

export default TaskItem;