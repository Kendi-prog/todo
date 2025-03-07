import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #F7F3FA;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  background: #F7F3FA;
`;

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F7F3FA;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  order: ${(props) => (props.isSignUp ? "0" : "1")};
  transform: ${(props) => (props.isSignUp ? "translateX(0)" : "translateX(-20px)")};
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  order: ${(props) => (props.isSignUp ? "1" : "0")};
  transform: ${(props) => (props.isSignUp ? "translateX(0)" : "translateX(-20px)")};
`;

export const Image = styled.img`
  width: 90%;
  height: 95%;
  object-fit: cover;
  border-radius: 15px;
`;