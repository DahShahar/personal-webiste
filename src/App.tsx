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
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <About />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/widgets",
          element: <Widgets />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#33691e",
      },
      secondary: {
        main: "#558b2f",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </head>
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
