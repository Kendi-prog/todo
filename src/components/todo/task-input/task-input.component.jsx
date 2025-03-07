import React, { useState, useEffect } from "react";
import { FaHourglassHalf, FaRegCalendarAlt } from "react-icons/fa";

import { 
    SaveButton, 
    TaskNameInput, 
    DateInput, 
    TimeInput,  
    TaskInputContainer, 
    Title,
    ToLabel, 
    DateTimeRow,  
    TextArea,
    CategoryContainer,
    ButtonRow,
    CancelButton,
    Icon,
    RadioLabel,
    HiddenRadio, 
    CustomRadio,
} from "./task-input.styles";


const categories = ['Personal','Official'];
    

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [notes, setNotes] = useState(''); 
    const [category, setCategory] = useState(categories[0]);


    const setLocalTime = () => {
        const currentTime = new Date();
        const currentLocalStartDate = currentTime.toISOString().split('T')[0];
        const currentLocalStartTime = currentTime.toTimeString().split(' ')[0].slice(0, 5);

        setStartDate(currentLocalStartDate);
        setStartTime(currentLocalStartTime);

        const endDate = new Date(currentTime.getTime() + 2 * 60 * 60 * 1000);
        const endFormattedDate = endDate.toISOString().split('T')[0];
        const endFormattedTime = endDate.toTimeString().split(' ')[0].slice(0, 5);

        setEndDate(endFormattedDate);
        setEndTime(endFormattedTime);
    };

    useEffect(() => {
        setLocalTime();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!task || !startDate || !endDate){
            alert("Please fill in all fields");
            return;
        }
        
        const formattedStartDate = new Date(startDate).toLocaleDateString("en-CA");

        console.log("Task:", task);
        console.log("Original Start Date:", startDate);
        console.log("Formatted Start Date (Stored):", formattedStartDate);

        addTask({
            task,
            startDate: formattedStartDate,
            endDate,
            startTime,
            endTime,
            notes,
            category,
        });
        handleReset();
    };

    const handleReset = () => {
        setTask('');
        setLocalTime();
        setNotes('');
        setCategory(categories[0]);
    };

    return(
        <TaskInputContainer>
            <Title>Add New Task</Title>
            <form onSubmit={handleSubmit}>
                <TaskNameInput 
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Title"
                    required
                />
                <DateTimeRow>
                    <Icon><FaRegCalendarAlt /></Icon>
                    <DateInput
                        className="small"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required 
                    />
                    <Icon><FaHourglassHalf /></Icon>
                     <TimeInput
                        className="small"
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required 
                    />
                </DateTimeRow>
                <ToLabel>To</ToLabel>
                <DateTimeRow>
                    <Icon><FaRegCalendarAlt /></Icon>
                    <DateInput
                        className="small"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required 
                    />
                    <Icon><FaHourglassHalf /></Icon>
                    <TimeInput
                        className="small"
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required 
                    />
                </DateTimeRow>
                <CategoryContainer>
                    {categories.map((cat, index) => (
                        <RadioLabel key={index}>
                            <HiddenRadio 
                            type="radio" 
                            name="category"
                            value={cat}
                            checked={category === cat} 
                            onChange={(e) => setCategory(e.target.value)} 
                            />
                            <CustomRadio />
                            {cat}
                        </RadioLabel>
                    ))}
                </CategoryContainer>
                <TextArea 
                    type="textarea"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add note"
                />
                 <ButtonRow>
                    <SaveButton type="submit">Save</SaveButton>
                    <CancelButton type="button" onClick={handleReset}>Cancel</CancelButton>
                </ButtonRow>
               

            </form>

        </TaskInputContainer>
    );
}


export default TaskInput;