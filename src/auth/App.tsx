import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { ErrorPage, HomePage, LayoutPage, ListaPage } from "../pages";

const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      loader() {
        return {usuario: "Luis"}
      },
      Component: LayoutPage,
      children: [
        {
          path: "/",
          Component: HomePage,
          // loader: protectedLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: "/lista",
          Component: ListaPage,
          // loader: protectedLoader,
          errorElement: <ErrorPage />,
        },
      ],
  
      errorElement: <ErrorPage />,
    },
    {
      id: "login",
      path: "/login",
      // action: loginAction,
      // loader: loginLoader,
      // Component: LoginPage,
    },
    {
      path: "/logout",
      async action() {
        // await AuthProvider.signout();
        return redirect("/");
      },
    },
  ]);

export function App () {
  return (
    <RouterProvider router={router} fallbackElement={<p>Carregando...</p>} />
  );
}