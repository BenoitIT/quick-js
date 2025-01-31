import { HeartIcon } from "@heroicons/react/24/outline";
import { Typography, Card, CardHeader, Button, CardBody, IconButton } from "@material-tailwind/react";
import CircularProgress from "@/widgets/progress/progressBar";
import { useNavigate } from "react-router-dom";
const DonationInfo = () => {
    const navigate = useNavigate();
    return (
        <Card variant="gradient" className="w-full max-w-[23rem] p-8 shadow-lg drop-shadow-md h-fit">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center "
            >
                <div className="flex justify-between w-full">
                    <div className="pt-4">
                        <Typography
                            variant="small"
                            color="white"
                            className=" text-gray-900 capitalize font-semibold text-3xl"
                        >
                            $990 raised
                        </Typography>
                        <Typography
                            variant="small"
                            color="white"
                            className="font-normal  text-gray-700"
                        >
                            $50k goal .  30 donations
                        </Typography>
                    </div>
                    <div>
                        <CircularProgress progress={40} />
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <Button className="bg-yellow-700  md:min-w-[300px] min-w-fit capitalize text-black">Share now</Button>
                    <Button className="bg-yellow-900 mt-2 md:min-w-[300px] min-w-fit capitalize text-black" onClick={() => navigate("donate")}>Donate now</Button>
                </div>
            </CardHeader>
            <CardBody className="p-0">
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                        <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                            <HeartIcon color="black" className="w-4 h-4" />
                        </IconButton>
                        <div className="flex flex-col">
                            <Typography className="font-normal text-sm">John chillwell doe</Typography>
                            <Typography className="font-normal text-sm"><span className="font-medium text-black">$30</span> . <span>14d</span></Typography>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                            <HeartIcon color="black" className="w-4 h-4" />
                        </IconButton>
                        <div className="flex flex-col">
                            <Typography className="font-normal text-sm">John doe</Typography>
                            <Typography className="font-normal text-sm"><span className="font-medium text-black">$30</span> . <span>14d</span></Typography>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                            <HeartIcon color="black" className="w-4 h-4" />
                        </IconButton>
                        <div className="flex flex-col">
                            <Typography className="font-normal text-sm">John Kalisa doe</Typography>
                            <Typography className="font-normal text-sm"><span className="font-medium text-black">$30</span> . <span>14d</span></Typography>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                            <HeartIcon color="black" className="w-4 h-4" />
                        </IconButton>
                        <div className="flex flex-col">
                            <Typography className="font-normal text-sm">John bachil doe</Typography>
                            <Typography className="font-normal text-sm"><span className="font-medium text-black">$30</span> . <span>14d</span></Typography>
                        </div>
                    </li>
                    <li className="flex items-center gap-4">
                        <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                            <HeartIcon color="black" className="w-4 h-4" />
                        </IconButton>
                        <div className="flex flex-col">
                            <Typography className="font-normal text-sm">John christian doe</Typography>
                            <Typography className="font-normal text-sm"><span className="font-medium text-black">$30</span> . <span>14d</span></Typography>
                        </div>
                    </li>
                </ul>
                <div className="mt-4 flex gap-3">
                    <Button className="bg-white text-black border text-sm font-normal">View all</Button>
                    <Button className="bg-white text-yellow-900 border text-sm font-normal">See top</Button>
                </div>
            </CardBody>
        </Card>
    )
}
export default DonationInfo;