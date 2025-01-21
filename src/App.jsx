import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import Campaign from "./pages/campaign";
import routes from "@/routes";
import HowItWorks from "./pages/howIworks";
import StartCampaign from "./pages/startCampaign";
import { CompaignHolder } from "./layouts/campholderLayout";
import { Admin } from "./layouts/admin";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up' || pathname == '/home/how-quick-fund-works' || pathname == '/create-campaign'|| pathname.startsWith('/campaign-holder')|| pathname.startsWith('/admin')) && (
        <div className="container absolute  left-2/4 z-10 mx-auto -translate-x-2/4 p-4 bg-transparent">
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="/home/how-quick-fund-works" element={<HowItWorks />} />
        <Route exact path="/home/:id" element={<Campaign />} />
        <Route exact path="/create-campaign" element={<StartCampaign />} />
        <Route exact path="/campaign-holder" element={<CompaignHolder />} />
        <Route exact path="/admin/*" element={<Admin />} />
        <Route exact path="/campaign-holder/*" element={<CompaignHolder />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
