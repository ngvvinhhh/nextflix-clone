<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
=======
import { RouterProvider, createBrowserRouter } from "react-router-dom";
>>>>>>> 360b243975187a587175244ce0741e528f3312c7
import MovieManagement from "./pages/movie-management";
import HomePage from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
<<<<<<< HEAD

=======
>>>>>>> 360b243975187a587175244ce0741e528f3312c7
    {
      path: "/movie-management",
      element: <MovieManagement />,
    },
  ]);
<<<<<<< HEAD
=======

>>>>>>> 360b243975187a587175244ce0741e528f3312c7
  return <RouterProvider router={router} />;
}

export default App;
