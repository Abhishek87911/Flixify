import { checkValidData } from "../utils/validate";
import Header from "./Header"
import { useRef, useState } from "react"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [ isSignInForm,setIsSignForm ] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
  
    const dispatch = useDispatch();


    const handleButtonClick = () => {
        //Validate form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;

         //sign in/ sign up logic
        if(!isSignInForm){
         //SignUp logic 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed up 
          const user = userCredential.user;
           updateProfile(user, {
            displayName: name.current.value, 
           
          }).then(() => {
            // Profile updated!
            const {uid,email,displayName} = auth.currentUser;
            dispatch(addUser({uid: uid,email: email,displayName:displayName}));
          
          }).catch((error) => {
            // An error occurred
            setErrorMessage(errorMessage);
          });
        
         

         // ...
         })
         .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode+"-"+errorMessage);
        // ..
  });


        } else {
            //SignIn logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
         
            // ...
            })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage)
           });

         }
 }
    const toggleSignInForm = () => {
     setIsSignForm(!isSignInForm);
    };
    
  return (
    <div>
      <Header />
      <div className="absolute" >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="bg-pic" />
      </div>
    <form 
    onSubmit={(e)=>e.preventDefault()}
    className="w-1/3 mx-auto my-20 right-0 left-0 absolute p-8 py-4 bg-black text-white rounded-lg bg-opacity-80">
    <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm && <input 
    type="text" 
    ref={name}
    placeholder="Full Name" 
    className="p-4 my-4 w-full bg-gray-700 rounded-sm"
    />}
    <input 
    ref ={email}
    type="text" 
    placeholder="Email Address" 
    className="p-4 my-4 w-full bg-gray-700 rounded-sm"
    />
    <input 
    ref={password}
    type="password" 
    placeholder="Password" 
    className="p-4 my-4 w-full  bg-gray-700 rounded-sm"
    />
     <p className="text-red-500  text-lg py-2">
     {errorMessage}
    </p>
    <button 
    className="py-4 my-6 bg-red-700 w-full rounded-lg"
    onClick={handleButtonClick}
    >
    {isSignInForm ? "Sign In" : "Sign Up"}
    </button>
    <p 
    className="py-4 cursor-pointer" 
    onClick={toggleSignInForm}>{isSignInForm ? "New to Flixify? Sign Up Now!" : "Already Registered? Sign In Now!"} 
    </p>
    </form>
    </div>
    
  )
}

export default Login
