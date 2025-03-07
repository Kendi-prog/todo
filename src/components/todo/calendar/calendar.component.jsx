import React, {useState, useEffect} from "react";

import { Arrow, 
    CalendarContainer,  
    DatesContainer, 
    DayLabel, 
    DateLabel,
    DaysLabelContainer, 
} from "./calendar.styles";


const Calendar = ({ onDateSelect }) => {
    const [currentDate] = useState(new Date());
    const [startDateIndex, setStartDateIndex] = useState(0);
    const [dateRange, setDateRange] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateClick = (date, index) => {
        setSelectedDate({ date, position: index * 50 + 30 })
        onDateSelect(date);
    };

    const getCurrentDateIndex = (dates) => {
        const today = new Date();
        return dates.findIndex(
            (date) =>
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()
        );
    };

    useEffect(() => {
        const generateDateRange = () => {
            const dates = [];
            const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

            for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
                dates.push(new Date(date));
            }
            return dates;
        };

        const newDateRange = generateDateRange();
        setDateRange(newDateRange);

        
        const currentDateIndex = getCurrentDateIndex(newDateRange);
        if (currentDateIndex !== -1) {
            setStartDateIndex(Math.floor(currentDateIndex / 7) * 7);
        }
    }, [currentDate]);

    const handlePrevious = () => {
        setStartDateIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    const handleNext = () => {
        if (startDateIndex + 7 < dateRange.length) {
            setStartDateIndex((prevIndex) => Math.min(prevIndex + 3, dateRange.length - 1));
        }
    };

    const visibleDates = dateRange.slice(startDateIndex, startDateIndex + 7);

    return (
        <CalendarContainer>
            <DatesContainer>
                <Arrow onClick={handlePrevious}>&#x23F4;</Arrow>
                <DaysLabelContainer>
                    {visibleDates.map((date, index) => {
                        const isToday = date.toDateString() === new Date().toDateString();
                        const isSelected = selectedDate && 
                            selectedDate.date.toDateString() === date.toDateString() && !isToday;
                        return (
                            <div key={index}>
                                <DayLabel>{date.toLocaleString("default", { weekday: "short" })}</DayLabel>
                                <DateLabel 
                                    onClick={() => handleDateClick(date)} 
                                    isToday={isToday}
                                    isSelected={isSelected}
                                >
                                    {date.getDate()}
                                </DateLabel>
                            </div>
                        );
                    })}
                </DaysLabelContainer>
                <Arrow onClick={handleNext}>&#x23F5;</Arrow>
            </DatesContainer>
        </CalendarContainer>
    );
};

export default Calendar;
