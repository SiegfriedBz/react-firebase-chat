import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <NavBar user={user} auth={auth}/>
      <div className="container">
          {!user ?
              <Welcome />
              : <ChatBox user={user} auth={auth}/>
          }
      </div>
    </>
  );
}

export default App;
