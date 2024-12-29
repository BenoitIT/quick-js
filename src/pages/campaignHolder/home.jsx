import { StartCard } from "@/widgets/cards/stats-card";
// import { StasticalChart } from "@/widgets/charts/primaryChart";
import {
    ArrowDownOnSquareStackIcon,
    ArrowsPointingInIcon,
    UserGroupIcon
} from "@heroicons/react/24/solid";

const Home = () => {
    return (
        <div className="w-full mt-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 grid-cols-1">
                <StartCard icon={<ArrowDownOnSquareStackIcon />} title={"Pending campaigns"} value={"30"} footer={"+2 campaign this month"} />
                <StartCard icon={<ArrowsPointingInIcon />} title={"Completed campaigns"} value={"10"} footer={"+3 campaign this month"} />
                <StartCard icon={<UserGroupIcon />} title={"Donations"} value={"30"} footer={"+10 denated this month"} />
            </div>
            <div className="mt-6 bg-white p-2 rounded-lg">
                {/* <StasticalChart/> */}
            </div>
        </div>
    )
}
export default Home;