import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import RootLayout from "./Layouts/RootLayout";
import Mens, { loader as mensLoader } from "./pages/Mens";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="/mens" element={<Mens />} loader={mensLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
