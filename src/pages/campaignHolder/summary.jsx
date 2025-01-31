import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import WithDrawCard from "@/widgets/cards/withdraw-card";
const Analytics = () => {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border mt-10">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Performance
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-800">
                    Analytic information regarding information.
                </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-800">
                            Pending amount from campaigns
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $40,800
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-800">
                            Withdawn amount from campaigns
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            $400,800
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-800">
                            Pending campaigns
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            10
                        </dd>
                    </div>
                    <div className="grid lg:grid-cols-3 p-6 md:grid-cols-2 grid-cols-1">
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    MTN Momo
                                </Typography>
                                <Typography>
                                    Pending funds
                                </Typography>
                                <Typography>
                                    $20,000
                                </Typography>
                                <WithDrawCard />
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Pay pal
                                </Typography>
                                <Typography>
                                    Pending funds
                                </Typography>
                                <Typography>
                                    $10,000
                                </Typography>
                                <WithDrawCard />
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Banks name 1
                                </Typography>
                                <Typography>
                                    Pending funds
                                </Typography>
                                <Typography>
                                    $10,000
                                </Typography>
                                <WithDrawCard />
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Banks name 2
                                </Typography>
                                <Typography>
                                    Pending funds
                                </Typography>
                                <Typography>
                                    $10,000
                                </Typography>
                                <WithDrawCard />
                            </CardBody>
                        </Card>
                    </div>
                </dl>
            </div>
        </div>
    )
}
export default Analytics;