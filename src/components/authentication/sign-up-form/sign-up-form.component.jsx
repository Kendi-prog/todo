import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth"; 
import { doc, setDoc } from "firebase/firestore";

import { auth, db, googleSignIn } from "../../../utils/firebase";
import { 
    FormContainer,
    Title, 
    TitleText,
    StyledField, 
    SubmitButton,
    HorizontalLineContainer,
    GoogleIcon,
    ErrorMessageContainer,
} from "./sign-up-form.styles";

const SignUpForm = () => {
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(15, "Username must be at most 15 characters")
            .required("Required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .matches(/[a-z]/, "Password must contain at least one lowercase letter")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/[0-9]/, "Password must contain at least one number")
            .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
            .required("Required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match!")
            .required("Required")
    });


    const googleSignUp = async (providerFunction) => {
        const user = await providerFunction();
        
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            username: user.displayName,
            createdAt: new Date()
        });
        
        if (user) {
            alert("Account created successfully");
           
        }

        navigate("/todo");
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            //creating the user in firebase authentication
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            //creating the user in firestore
            await setDoc(doc(db, "users", user.uid), {
                username: values.username,
                email: values.email,
                createdAt: new Date()
            });

            alert("Account created successfully");

            resetForm();

            navigate("/todo");

        } catch (error) {
            // console.error("Sign up error", error);
            // setFieldError({ email: "Email already in use"});
            // alert("Failed creating account, try again!");

             // Map Firebase error messages to a user-friendly format
            if (error.code === "auth/email-already-in-use") {
                alert("This email is already in use. Try another one.");
            } else if (error.code === "auth/weak-password") {
                alert("Password should be at least 6 characters."); 
            } else if (error.code === "auth/invalid-email") {
                alert("Invalid email address format.");
            }
    
        }
        setSubmitting(false);
    };

    return (
        <FormContainer>
            <Title>Create a free account</Title>
            <TitleText>Your to go to habit tracker app</TitleText>
            <SubmitButton onClick={() => googleSignUp(googleSignIn)}>
                <GoogleIcon />
                Sign up with Google
            </SubmitButton>
            <HorizontalLineContainer>
                <hr />
                <span>OR</span>
                <hr />   
            </HorizontalLineContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <StyledField type="text" name="username" placeholder="Username" />
                            <ErrorMessageContainer name="username" component="div" />
                        </div>
                        <div>
                            <StyledField type="email" name="email" placeholder="Email" />
                            <ErrorMessageContainer name="email" component="div" />
                        </div>
                        <div>
                            <StyledField type="password" name="password" placeholder="Password" />
                            <ErrorMessageContainer name="password" component="div" />
                        </div>
                        <div>
                            <StyledField type="password" name="confirmPassword" placeholder="Confirm Password" />
                            <ErrorMessageContainer name="confirmPassword" component="div" />
                        </div>

                        <SubmitButton type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing up ..." : "Sign Up"}
                        </SubmitButton>
                    </Form>
                )}
            </Formik>
       
        </FormContainer>
    );
}

export default SignUpForm;
