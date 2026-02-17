import { useRoutes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Layout from "./Components/Layout";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "login",   // ✅ no slash
          element: <Login />,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
