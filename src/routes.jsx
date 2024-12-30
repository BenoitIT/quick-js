import { Home, SignIn, SignUp } from "@/pages";
import HomePage from "./pages/campaignHolder/home";
import UpcommingCampaigns from "./pages/campaignHolder/upcommingCampaign";
import EndedCampaigns from "./pages/campaignHolder/EndedCampaign";
import Notifications from "./pages/campaignHolder/notification";
import Profile from "./pages/campaignHolder/profile";
import {
  UserCircleIcon,
  InformationCircleIcon,
  ArrowsPointingInIcon,
  LockClosedIcon,
  ArrowDownOnSquareStackIcon,
  Squares2X2Icon ,
  Cog6ToothIcon
} from "@heroicons/react/24/solid";


export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About us",
    path: "",
    element: <Home />,
  },
  {
    name: "",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;



const icon = {
  className: "w-5 h-5 text-inherit",
};

export const compHolderRoutes = [
  {
    layout: "campaign-holder",
    pages: [
      {
        icon: <Squares2X2Icon {...icon} />,
        name: "Home",
        path: "/home", 
        element: <HomePage/>,
      },
      {
        icon: <ArrowDownOnSquareStackIcon {...icon} />,
        name: "Upcomings",
        path: "/upcoming-campaigns",
        element: <UpcommingCampaigns/>,
      },
      {
        icon: <ArrowsPointingInIcon {...icon} />,
        name: "Ended campaign",
        path: "/ended-campaigns",
        element: <EndedCampaigns />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Settings",
        path: "/settings",
        element: <Profile />,
      },
    ],
  },
  {
    title: "",
    layout: "auth",
    pages: [
      {
        // icon: <ServerStackIcon {...icon} />,
        name: " ",
        path: " ",
        // element: <SignIn />,
      },
      {
        // icon: <RectangleStackIcon {...icon} />,
        name: "",
        path: "",
        // element: <SignUp />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        // element: <Profile />,
      },
      {
        icon: <LockClosedIcon {...icon} />,
        name: "Logout",
        path: "",
      },
    ],
  },
];



