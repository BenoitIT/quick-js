import { Routes, Route } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
} from "@/widgets/layout";
import { compHolderRoutes } from "@/routes";
import { useMaterialTailwindController } from "@/context";
import Profile from "@/pages/campaignHolder/profile";



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
          {compHolderRoutes.map(
            ({ layout, pages }) =>
              layout === "campaign-holder" &&
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
