// import './App.css';
import About from './about';
import Widgets from './widgets';
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
import Resume from './resume';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/resume",
          element: <Resume />
        },
        {
          path: "/widgets",
          element: <Widgets />,
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
