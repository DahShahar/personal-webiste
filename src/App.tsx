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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
