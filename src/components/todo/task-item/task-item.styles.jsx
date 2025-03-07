import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const categoryColors = {
    Official: '#ADD8E6',
    Personal: '#FF9BA0',    
};

const categoryBorderColors = {
    Official:'#5A92AF' ,                         
    Personal:'#D16B72',                    
};

export const TaskItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin:  10px 0;
    justify-content: space-between;
    margin: 10px 0;
    
`;

export const TaskContainer = styled.li`
    background-color: ${({ category }) => categoryColors[category] || '#fff'};
    border-left: 5px solid  ${({ category }) => categoryBorderColors[category] };
    color: white;
    padding: 6px;
    margin: 10px 0 ;
    border-radius: 0 20px 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex-grow: 1;
    min-width: 200px;
   
`;

export const TaskStartTime = styled.div`
   font-weight: bold;
   margin-right: 20px
`;

export const TaskName = styled.h3`
    
`;

export const CompleteTaskIcon = styled.div`
    background: transparent;
    margin: 10px;
    cursor: pointer;
    font-size: 20px;;
    color: ${({ completed }) => (completed ? "green" : "gray")}; 
    transition: color 0.3s ease-in-out; /* Smooth color transition */

    &:hover {
        color: ${({ completed }) => (completed ? "darkgreen" : "darkgray")}; 
    }
`;

export const DeleteIcon = styled.button`
    background: transparent;
    border: none;
    color: #dc3545;
    curser: pointer;
    padding: 0;
    margin-left: 20px;
    font-size: 20px;
    // width: 20px;
    // height: 20px;
`;

export const Icon = styled(FontAwesomeIcon)`
    font-size: 16px;
`;

export const HiddenSpace = styled.div`
    width: 30px;
    height: 30px;
`;

export const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50px;
  background-color: #7600bc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  font-size: 14px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;
