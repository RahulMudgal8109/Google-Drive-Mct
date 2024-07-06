import { useState } from "react";
import Data from "./Data";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { auth, provider } from "./firebase";



function App() {
  const[user,setUser]=useState(null);
  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)

    }).catch(error=>{
      alert(error.message);
    })
  }
  return (
    <>
      {
        user ? (
          <>
            <Header photoUrl={user.photoUrl}/>
            <div className="App">
              <Sidebar />
              <Data />

            </div></>
        ):(
          <div className="loginWrap">
            <img src="https://tse3.mm.bing.net/th?id=OIP.lgdmCc6UHAWc27h0o4tSbwHaHa&pid=Api&P=0&h=220"/>
            <button onClick={signIn}>Login to Google Drive</button>
          </div>
        )
    }

    </>
  );
}

export default App;
