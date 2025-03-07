import styled from 'styled-components';


export const TodoMainContainer = styled.div`
    display: flex;
    height: 100vh; 
    overflow: hidden;
`;

export const TaskInputArea = styled.div`
    flex: 1; 
    padding: 10px;
    background-color: #f8f9fa;
    border-right: 1px solid #dee2e6;
`;

export const TaskListArea = styled.div`
    flex: 2; 
    padding: 20px;
    background-color: #F7F3FA; 
    overflow-y: auto;
    height: 100vh;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const AnalyticsArea = styled.div`
    flex: 1; 
    padding: 10px;
    background-color: #f1f3f5; 
    border-left: 1px solid #dee2e6;
`;

