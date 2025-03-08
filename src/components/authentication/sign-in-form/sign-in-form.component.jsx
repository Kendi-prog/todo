import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { auth, googleSignIn } from "../../../utils/firebase";
import { 
     FormContainer,
     StyledField,
     SubmitButton,
     Title,
     HorizontalLineContainer,
     GoogleIcon,
     RememberMe,
     RememberMeInput,
     ErrorMessageContainer,
     PasswordContainer,
     EyeIcon

} from "./sign-in-form.styles";


const SignInForm = () => {
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false);
    const[showPassword, setShowPassword] = useState(false);

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Required")
    });

    const handleGoogleSignIn = async (providerFunction) => {
        const user = await providerFunction();
        if(user) {
            alert("Sign In Successful");
        }
        navigate("/todo");
    }

    const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth, values.email, values.password
            );
            const accessToken = await userCredential.user.getIdToken();

            if(rememberMe) {
                Cookies.set("accessToken", accessToken, { expires: 30 });
            }

            alert("Sign In Successful");
            resetForm();
            navigate("/todo");

        } catch (error) {
            console.error("Login Error:", error); // Logs the error for debugging

            setErrors({ email: "Incorrect email or password" });

            alert("Incorrect email or password!");

            resetForm({ values: { email: "", password: "" } });
        }

        
        setSubmitting(false);
    }

    return (
        <FormContainer>
            <Title>Sign In</Title>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <StyledField type="email" name="email" placeholder="Email" />
                            <ErrorMessageContainer name="email" component="div"/>
                        </div>
                        <PasswordContainer>
                            <StyledField type={showPassword ? "text" : "password"} name="password" placeholder="Password" />
                            <EyeIcon 
                                onClick={() => setShowPassword((prev) => !prev)} 
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </EyeIcon>
                            <ErrorMessageContainer name="password" component="div"/>
                        </PasswordContainer>
                        <RememberMe>
                            <label>
                                <RememberMeInput 
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Remember me
                            </label>
                        </RememberMe>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in ..." : "Sign In"}
                        </SubmitButton>
                    </Form>
                )}
            </Formik>
            <div>
                <HorizontalLineContainer>
                    <hr />
                    <span>OR</span>
                    <hr />   
                </HorizontalLineContainer>
                <SubmitButton onClick={() => handleGoogleSignIn(googleSignIn)}>
                    <GoogleIcon />
                    Sign in with Google
                </SubmitButton>
            </div>
        </FormContainer>
    );
}

export default SignInForm;