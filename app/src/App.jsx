import Home from "./pages/Home/Home";
import Layout from "./pages/layout/Layout";
import Register from "./pages/register/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const routes = createBrowserRouter([
    { index: true, element: <Register /> },
    {
      path: "/layout",
      element: <Layout />,
      children: [
        { index:true, element:<Home/> },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
