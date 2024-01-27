import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGPTsearchView } from "../utils/GPTslice"; 
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store)=>store.user)
    const showGPTsearch = useSelector((store) => store.GPT.showGPTsearch)

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

const handleGPTsearchClick = () => {
  //Toggle GPT search button
  dispatch(toggleGPTsearchView());
}

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value))
}


  return (
    <div className="absolute w-screen px-8 md:py-2 bg-gradient-to-b from from-black z-10 flex 
    flex-col md:flex-row justify-between ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    {user && ( <div className="flex p-2 justify-between">
      {showGPTsearch && (<select className="p-2 bg-gray-700 text-white m-2 rounded-lg" onChange={handleLanguageChange}>
        {
        SUPPORTED_LANGUAGES.map(lang =>  <option key={lang.identifier} val={lang.identifier}>{lang.name}</option>)
        }
       
      

      </select>)}
       <button className="p-2 md:py-2 md:px-4 md:my-2 md:mx-4 bg-purple-800 text-white rounded-lg"
       onClick={handleGPTsearchClick}
       >{showGPTsearch ? "Home Page" : "GPT Search"}</button>
        <img src={ USER_AVATAR } alt="userIcon" className="hidden md:block w-12 h-12 "/>
        <button onClick={handleSignOut}className="font-bold text-white">(Sign Out)</button>
      </div>
  )}
    </div>
    
  )
}

export default Header
