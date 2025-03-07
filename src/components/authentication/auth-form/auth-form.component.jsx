import React, { useState } from "react";

import SignInForm from "../sign-in-form/sign-in-form.component";
import SignUpForm from "../sign-up-form/sign-up-form.component";
import auth1 from "../../../assets/auth1.jpeg";
import auth3 from "../../../assets/auth3.jpeg";
import { 
    Container, 
    ImageContainer, 
    FormContainer, 
    Wrapper, 
    Image 
} from "./auth-form.styles";

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleAuth = () => setIsSignUp(!isSignUp);

    return (
      <Container>
        <Wrapper>
            <ImageContainer isSignUp={isSignUp}>
                <Image src={isSignUp ? auth3 : auth1} alt={isSignUp ? "Sign up image" : "Sign in image"} />
            </ImageContainer>
            <FormContainer isSignUp={isSignUp}>
                {isSignUp ? <SignUpForm /> : <SignInForm />}
                <p>
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <span style={{ cursor: "pointer", color: "blue" }} onClick={toggleAuth}>
                        {isSignUp ? " Sign In" : " Sign Up"}
                    </span>
                </p>
            </FormContainer>
        </Wrapper>
      </Container>
    );
};

export default AuthForm;

