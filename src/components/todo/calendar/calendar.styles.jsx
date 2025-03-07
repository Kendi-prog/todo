import styled from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

export const DatesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Arrow = styled.div`
    cursor: pointer;
    font-size: 30px;
    padding: 10px;
    color: #7600bc;
    font-weight: bolder;
`;

export const DaysLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Space between days and dates */
`;

export const DayLabel = styled.div`
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
    text-transform: uppercase;
`;

export const DateLabel = styled.div`
    cursor: pointer;
    text-align: center;
    padding: 15px;
    border-radius: 30%;
    width: 30px;
    height: 30px;
    background-color: ${(props) => (props.isSelected ? "#ccc" : props.isToday ? "#7600bc" : "transparent")};
    color: ${(props) => (props.isSelected || props.isToday ? "white" : "black")};
   
    &:hover {
        background-color: ${(props) => (props.isToday ? '#000' : '#f0f0f0')};
    }
`;

