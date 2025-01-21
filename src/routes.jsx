import { Home, SignIn, SignUp } from "@/pages";
import HomePage from "./pages/campaignHolder/home";
import UpcommingCampaigns from "./pages/campaignHolder/upcommingCampaign";
import EndedCampaigns from "./pages/campaignHolder/EndedCampaign";
import Notifications from "./pages/campaignHolder/notification";
import Profile from "./pages/campaignHolder/profile";
import Analytics from "./pages/campaignHolder/summary";
import CampaignCreators from "./pages/admin/campain-creator";
import AdminUpcommingCampaigns from "./pages/admin/upcommingCampaign";
import AdminEndedCampaigns from "./pages/admin/EndedCampaign";
import {
  UserCircleIcon,
  InformationCircleIcon,
  ArrowsPointingInIcon,
  LockClosedIcon,
  ArrowDownOnSquareStackIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  UserGroupIcon
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
        element: <HomePage />,
      },
      {
        icon: <ArrowDownOnSquareStackIcon {...icon} />,
        name: "Upcomings",
        path: "/upcoming-campaigns",
        element: <UpcommingCampaigns />,
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
        name: "Analytics",
        path: "/summary",
        element: <Analytics />,
      },
    ],
  },
  {
    title: "",
    layout: "auth",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },

      {
        icon: <LockClosedIcon {...icon} />,
        name: "Logout",
        path: "",
      },
    ],
  },
];

export const adminRoutes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <Squares2X2Icon {...icon} />,
        name: "Overview",
        path: "/overview",
        element: <HomePage />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "compaign creators",
        path: "/campaign-holders",
        element: <CampaignCreators/>,
      },
      {
        icon: <ArrowDownOnSquareStackIcon {...icon} />,
        name: "Upcomings",
        path: "/upcoming-campaigns",
        element: <AdminUpcommingCampaigns />,
      },
      {
        icon: <ArrowsPointingInIcon {...icon} />,
        name: "Ended campaign",
        path: "/ended-campaigns",
        element: <AdminEndedCampaigns />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Analytics",
        path: "/summary",
        element: <Analytics />,
      },
    ],
  },
  {
    title: "",
    layout: "auth",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },

      {
        icon: <LockClosedIcon {...icon} />,
        name: "Logout",
        path: "",
      },
    ],
  },
];



