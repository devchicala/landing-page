import Globalstyle from "./styles/global";

import Routes from "./routes";
import { UserProvider } from "./context/index";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Globalstyle />
        <ToastProvider autoDismiss autoDismissTimeout={4000}>
          <Routes />
        </ToastProvider>
      </UserProvider>
    </div>
  );
}

export default App;
