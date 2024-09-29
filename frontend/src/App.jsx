import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainRoutes } from "./Routes/mainroutes";
import { adminRoutes } from "./Routes/adminroutes";

const router = createBrowserRouter([mainRoutes, adminRoutes]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
