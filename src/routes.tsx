import { DefaultLayout, SidebarLayout } from "@/layouts";

import {
  GamePage,
  HomePage,
  LivePage,
  MemeshowPage,
  MyInfoPage,
  StreamerDetailPage,
  MySubscribePage,
  UserPage,
} from "@/page";
import { createBrowserRouter } from "react-router-dom";
import { SidebarMenu1, SidebarMenu2 } from "@/components";

// type routeProps = {
//   path: string;
//   component: React.ReactNode;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/*",
    element: (
      <SidebarLayout>
        <SidebarMenu1 />
      </SidebarLayout>
    ),
    children: [
      {
        path: "lives",
        element: <LivePage />,
      },
      {
        path: "games/:id?",
        element: <GamePage />,
      },
      {
        path: "shows",
        element: <MemeshowPage />,
      },
      {
        path: "user/:id",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/:streamer",
    element: (
      <SidebarLayout>
        <SidebarMenu1 />
      </SidebarLayout>
    ),
    children: [
      {
        path: "",
        element: <StreamerDetailPage />,
      },
    ],
  },
  {
    path: "/i/*",
    element: (
      <SidebarLayout>
        <SidebarMenu2 />
      </SidebarLayout>
    ),
    children: [
      {
        path: "my-info",
        element: <MyInfoPage />,
      },
      {
        path: "my-subscribe",
        element: <MySubscribePage />,
      },
    ],
  },
]);

// private
//profile
// my subcribes

// live detail
// trang cá nhân của streamer

//layouts

// Default (header, footer)
// Sidebar ()

export default router;
