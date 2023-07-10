import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { LoadingProvider } from "./context/LoadierContext.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <LoadingProvider>
    <AuthContextProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AuthContextProvider>
  </LoadingProvider>
);
