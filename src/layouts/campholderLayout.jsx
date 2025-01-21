import { Routes, Route } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
} from "@/widgets/layout";
import { compHolderRoutes } from "@/routes";
import { useMaterialTailwindController } from "@/context";
import CampaignInfo from "@/pages/campaignHolder/campaignView";



export function CompaignHolder() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={compHolderRoutes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar routes={compHolderRoutes} />
        <Routes>
        <Route  path="*" element={<CampaignInfo/>} />
          {compHolderRoutes.map(
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

CompaignHolder.displayName = "/src/layout/campholderLayout.jsx";

export default CompaignHolder;
