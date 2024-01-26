import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user)
    const handleSignOut = () => {
          signOut(auth).then(() => {
            // Sign-out successful.
           
            
          }).catch((error) => {
            // An error happened.
            navigate("/error");
            
          });
    }

    
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
        //User sign in
       const {uid,email,displayName} = user;
       dispatch(addUser({uid: uid,email: email,displayName:displayName}));
       navigate("/browse");
      
     
       
    } else {
      // User is signed out
     dispatch(removeUser());
     navigate("/");
   
    }
  });
  //unsubscribe when component unmounts
  return () => unsubscribe();

},[]);




  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
    {user &&  <div className="flex p-2">
        <img src={ USER_AVATAR } alt="userIcon" className="w-12 h-12 "/>
        <button onClick={handleSignOut}className="font-bold text-white">(Sign Out)</button>
      </div>
  }
    </div>
    
  )
}

export default Header
