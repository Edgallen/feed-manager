import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "../../router";

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default App;
