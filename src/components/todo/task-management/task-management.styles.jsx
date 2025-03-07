import styled from "styled-components";

export const TaskManagementContainer = styled.div`
    
`;

export const DateContainer = styled.h3`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 40px;
`;
    
export const CalendarContainer = styled.div`
    background-color: #fff;
    padding: 50px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`;

export const ListContainer = styled.ul`
    margin-top: 50px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background-color: #fff;
`;

export const Title = styled.h3`
    margin: 10px 60px;
`;


export const NoTasksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;

    img {
        width: 200px; /* Adjust size as needed */
        height: auto;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        color: #666;
        font-weight: 600;
    }
`;
