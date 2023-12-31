import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { Navbar } from "../../components/Navbar";
import "./App.css";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/:category?", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
