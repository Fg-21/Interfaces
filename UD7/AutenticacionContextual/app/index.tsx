import { AuthContextProvider } from "./AuthContext";
import AuthStatus from "./AuthStatus";


export default function Index() {
  

  return (
    <AuthContextProvider>
      <AuthStatus/>
    </AuthContextProvider>
  );
}
