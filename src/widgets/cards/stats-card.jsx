import { Card, CardHeader, CardBody, Typography, CardFooter} from "@material-tailwind/react"
export const StartCard = ({ icon, title, value, footer }) => {
    return (
        <div className="w-full">
            <Card className="border border-white shadow-sm">
                <CardHeader
                    variant="gradient"
                    floated={false}
                    shadow={false}
                    className="absolute grid h-12 w-12 place-items-center bg-green-900/95 text-white"
                >
                    <span className="w-6 text-white">{icon}</span>
                </CardHeader>
                <CardBody className="p-4 text-right">
                    <Typography variant="small" className="font-normal text-blue-gray-600">
                        {title}
                    </Typography>
                    <Typography variant="h4" color="blue-gray">
                        {value}
                    </Typography>
                </CardBody>
                <CardFooter className="border-t border-gray-100 p-4">
                    {footer}
                </CardFooter>
            </Card>
        </div>
    )
}