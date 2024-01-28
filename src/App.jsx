import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home, { loader as homeLoader } from "./pages/Home";
import RootLayout from "./Layouts/RootLayout";
import Mens, { loader as mensLoader } from "./pages/Mens";
import Womans, { loader as womansLoader } from "./pages/Womans";
import Electronics, { loader as electronicsLoader } from "./pages/Electronics";
import Jewelery, { loader as jeweleryLoader } from "./pages/Jewelery";
import Individual, { loader as individualLoader } from "./pages/Individual";
import Cart, { loader as cartLoader } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="/mens" element={<Mens />} loader={mensLoader} />
      <Route path="/womans" element={<Womans />} loader={womansLoader} />
      <Route
        path="/electronics"
        element={<Electronics />}
        loader={electronicsLoader}
      />
      <Route path="/jewelery" element={<Jewelery />} loader={jeweleryLoader} />
      <Route
        path="/individual/:id"
        element={<Individual />}
        loader={individualLoader}
      />
      <Route path="/cart" element={<Cart />} loader={cartLoader} />
      <Route path="/checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return (
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  );
}

export default App;
