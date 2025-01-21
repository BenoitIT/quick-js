import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["No", "First name", "Last name", "Country", "Email", "Phone", " "];

const TABLE_ROWS = [
    {
        firstName: "Alice",
        lastName: "Johnson",
        country: "USA",
        email: "alice.johnson@example.com",
        phone: "+1-202-555-0153",
    },
    {
        firstName: "Michael",
        lastName: "Brown",
        country: "Canada",
        email: "michael.brown@example.com",
        phone: "+1-416-555-0123",
    },
    {
        firstName: "Emily",
        lastName: "Davis",
        country: "UK",
        email: "emily.davis@example.co.uk",
        phone: "+44-20-7946-0958",
    },
    {
        firstName: "James",
        lastName: "Wilson",
        country: "Australia",
        email: "james.wilson@example.com.au",
        phone: "+61-2-5550-7890",
    },
    {
        firstName: "Sophia",
        lastName: "Martinez",
        country: "Spain",
        email: "sophia.martinez@example.es",
        phone: "+34-91-555-1234",
    },
    {
        firstName: "Liam",
        lastName: "Thompson",
        country: "Germany",
        email: "liam.thompson@example.de",
        phone: "+49-30-5550-6789",
    },
];

export default function CampaignCreators() {
    const navigate = useNavigate();
    return (
        <Card className="h-full w-full mt-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="my-2 flex items-center justify-between gap-2 md:flex-row flex-col">
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 "
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ firstName, lastName, country, email, phone }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name} >
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {index + 1}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {firstName}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {lastName}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {country}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {email}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {phone}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="View thier campaigns">
                                                <IconButton variant="text" onClick={() => navigate("/campaign-holder/upcoming-campaigns/1")}>
                                                    <EyeIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}