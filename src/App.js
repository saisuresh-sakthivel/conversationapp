//simport TableComponent from "./TableComponent";
import TableView from "./containers/TableView";
import Contact from "./containers/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <TableView />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div>
      {/*<TableComponent></TableComponent>*/}
      {/*<TableView></TableView>*/}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
