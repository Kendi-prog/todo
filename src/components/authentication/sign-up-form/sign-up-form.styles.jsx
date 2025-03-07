import styled from "styled-components";
import {Field, ErrorMessage} from "formik";
import { FcGoogle } from "react-icons/fc";

export const FormContainer = styled.div`
  background: #F7F3FA;
`;

export const Title = styled.h3`
    text-align: center;
`;

export const TitleText = styled.p`
    text-align: center;
    margin-top: -20px;
    font-size: 10px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 2px solid #ddd;
  border-radius: 55px;
  outline: none;
  background: white;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const ErrorMessageContainer = styled(ErrorMessage)`
  font-size: 13px;
  color: rgb(134, 9, 9);
  margin-left: 5px;
`;

export const GoogleIcon = styled(FcGoogle)`
  width: 20px;
  height: 15px;
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  border: none;
  border-radius: 55px;
  background: #7600bc;
  color: white;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #7600bc;
  }
`;

export const HorizontalLineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 10px;

    & hr {
        width: 100px;
        border: 0;
        border-top: 2px solid #ccc;
    }

    & span {
        padding: 0 5px;
        color: #ccc; 
        font-weight: bold; 
    }
;`
