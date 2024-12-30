import { StartCard } from "@/widgets/cards/stats-card";
import DonationChart from "@/widgets/charts/primaryChart";
import { dataDummy } from "@/data/donation";
import {
    ArrowDownOnSquareStackIcon,
    ArrowsPointingInIcon,
    UserGroupIcon
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const Home = () => {
    return (
        <div className="w-full mt-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 grid-cols-1">
                <StartCard icon={<ArrowDownOnSquareStackIcon />} title={"Pending campaigns"} value={"30"} footer={"+2 campaign this month"} />
                <StartCard icon={<ArrowsPointingInIcon />} title={"Completed campaigns"} value={"10"} footer={"+3 campaign this month"} />
                <StartCard icon={<UserGroupIcon />} title={"Donations"} value={"30"} footer={"+10 denated this month"} />
            </div>
            <Typography variant="h5" className="mt-3">Donations</Typography>
            <div className="mt-3 bg-white p-2 rounded-lg">
                <DonationChart data={dataDummy} color={"#1E5631"}/>
            </div>
            <Typography variant="h5" className="mt-3">Campaigns</Typography>
            <div className="mt-3 bg-white p-2 rounded-lg">
                <DonationChart data={dataDummy} color={"#FE691E"}/>
            </div>
        </div>
    )
}
export default Home;