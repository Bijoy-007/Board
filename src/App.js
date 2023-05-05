import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "./pages/RootPage";
import SignInPage from "./pages/SigninPage";
import DashboardPage from "./pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
  {
    path: "/sign_in",
    element: <SignInPage />,
  },
  {
    path: "/app/dashboard",
    element: <DashboardPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
