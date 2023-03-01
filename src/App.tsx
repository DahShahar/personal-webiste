import './App.css';
import AboutMe from './about-me';
import Resume from './resume';
import Home from './home';
import Root from './root';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <AboutMe />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
