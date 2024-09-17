import { useEffect } from "react";
import Chat from "./components/chat/chat";
import Detail from "./components/details/detail";
import List from "./components/list/list";
import Login from "./components/login/login";
import Notifications from "./components/notifications/notifications";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

const App = () => {
   const {theCurrentUser , getUserInfo , loading}= useUserStore();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth , (user)=>{
      getUserInfo(user?.uid)
    })

    return()=>{
      unsub();
    }
  },[])

    if (loading) return <div className="loading">Loading...</div>
  return (
    <div className='container'>

      {
         theCurrentUser ? (
          <>
          <List/>
          <Chat/>
          {use ? (<>
          
            <Detail/>
          </>): ((use) => !use)}
          </>

        ) : (<Login/>)
      }
      <Notifications/>
    </div>
  );
};

export default App