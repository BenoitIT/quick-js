import { Routes, Route } from "react-router-dom";
import {
    Sidenav,
    DashboardNavbar,
} from "@/widgets/layout";
import { adminRoutes } from "@/routes";
import { useMaterialTailwindController } from "@/context";
import CampaignInfo from "@/pages/campaignHolder/campaignView";



export function Admin() {
    const [controller, dispatch] = useMaterialTailwindController();
    const { sidenavType } = controller;

    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidenav
                routes={adminRoutes}
                brandImg={
                    sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
                }
            />
            <div className="p-4 xl:ml-80">
                <DashboardNavbar routes={adminRoutes} />
                <Routes>
                    <Route path="*" element={<CampaignInfo />} />
                    {adminRoutes.map(
                        ({ _, pages }) =>
                            pages.map(({ path, element }) => (
                                <Route exact path={path} element={element} />
                            ))
                    )}
                </Routes>
            </div>
        </div>
    );
}

Admin.displayName = "/src/layout/admin.jsx";

export default Admin;
