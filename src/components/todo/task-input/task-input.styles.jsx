import styled from "styled-components";

export const TaskInputContainer = styled.div`
    padding: 30px;
    margin-top: 50px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    }
`;


export const Title = styled.h3`
    margin-top: 0px;
    margin-bottom: 30px;
`;

export const TaskNameInput = styled.input`
    width: 100%;
    padding: 15px 0px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: rgb(231, 221, 240);
    padding-left: 12px;

    &::placeholder {
        color: #888;
        font-size: 17px;
        text-indent: 10px;
    }
`;

export const DateTimeRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

`;

export const Icon = styled.span`
    color: #7600bc;
    font-size: 15px;
`;

export const DateInput = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: rgb(231, 221, 240);

    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

export const TimeInput = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: rgb(231, 221, 240);

    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
`;

export const ToLabel = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;

 export const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    cursor: pointer;
`;

export const HiddenRadio = styled.input`
    display: none; 
`;

export const CustomRadio = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #7600bc;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    
    &::after {
        content: "";
        width: 6px;
        height: 7px;
        background-color: white; 
        border-radius: 50%;
        transition: background-color 0.2s ease-in-out;
    }

    ${HiddenRadio}:checked + &::after {
        background-color: #7600bc;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 15px 0px;
    padding-left: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-height: 50px;
    resize: none;
    margin-bottom: 10px;
    background: rgb(231, 221, 240);

    &::placeholder {
        color: #888;
        font-size: 17px;
        text-indent: 10px;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SaveButton = styled.button`
    padding: 10px ;
    background: #7600bc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 48%;
`;

export const CancelButton = styled.div`
   color: #dc3545;
   margin-right: 60px;
   margin-top: 6px;
   cursor: pointer;
`;




 

