import { useLocation, Link } from "react-router-dom";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Breadcrumbs,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    Cog6ToothIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import {
    useMaterialTailwindController,
    setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
    const [controller, dispatch] = useMaterialTailwindController();
    const { fixedNavbar, openSidenav } = controller;
    const { pathname } = useLocation();
    const [layout, page] = pathname.split("/").filter((el) => el !== "");

    return (
        <Navbar
            color={fixedNavbar ? "white" : "transparent"}
            className={`rounded-xl transition-all ${fixedNavbar
                ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
                : "px-0 py-1"
                }`}
            fullWidth
            blurred={fixedNavbar}
        >
            <div className="flex  justify-between gap-6 md:flex-row md:items-center">
                <div className="capitalize">
                    <Breadcrumbs
                        className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""
                            }`}
                    >
                    </Breadcrumbs>
                    <Typography variant="h5" color="blue-gray">
                        {page}
                    </Typography>
                </div>
                <div className="flex items-center">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="grid xl:hidden"
                        onClick={() => setOpenSidenav(dispatch, !openSidenav)}
                    >
                        <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
                    </IconButton>
                    <Link to="">
                        <Button
                            variant="text"
                            color="blue-gray"
                            className="hidden items-center gap-1 px-4 xl:flex normal-case"
                        >
                            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                            John Doe
                        </Button>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            className="grid xl:hidden"
                        >
                            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                        </IconButton>
                    </Link>

                    <Link to={"/campaign-holder/settings"}>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                        >
                            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
                        </IconButton>
                    </Link>
                </div>
            </div>
        </Navbar>
    );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboardTopNav.jsx";

export default DashboardNavbar;
