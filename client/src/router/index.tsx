import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { FeedPage, FeedPostPage } from "../pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FeedPage />,
  },
  {
    path: "/feedPost/:feedPostId",
    element: <FeedPostPage />,
  },
]);

export default appRouter;
