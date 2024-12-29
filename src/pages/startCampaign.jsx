import { cloneElement, useState } from "react";
// import { ArrowLeftIcon } from "@heroicons/24/outline";
import { Typography, Select, Option, Input, Button, Card } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import { TextEditorInput } from "@/widgets/editors/wssyig";
import { useNavigate } from "react-router-dom";
const StartCampaign = () => {
    const { countries } = useCountries();
    const navigate =useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };
    return (
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 flex-col">
            <div className="absolute top-0 h-full w-full bg-[url('/img/backimage.svg')] bg-cover bg-center" />
            <div className="absolute top-0 h-full w-full bg-green-900/95 bg-cover bg-center" />
            <div className="flex flex-row justify-between z-10 w-full container px-2">
                <Typography className="font-semibold text-sm text-white hover:cursor-pointer px-3 py-1 hover:bg-white hover:text-yellow-900 h-fit rounded" variant="h6" onClick={()=>navigate("/")}>
                    Home
                </Typography>
                <Typography className="font-semibold text-sm text-white hover:cursor-pointer px-3 py-1 hover:bg-white hover:text-yellow-900 h-fit rounded" variant="h6">
                    Dashboard
                </Typography>
            </div>
            <div className="container mx-auto  bg-white rounded-lg z-10 mt-20 bg-opacity-10 min-h-[60vh] flex md:flex-row flex-col shadow max-h-fit">
                <section className="md:w-3/5 w-5/5 md:min-h-[60vh] min-h-[200px] max-h-full">
                    <div className="flex flex-col justify-center items-center h-full md:mt-0 mt-6">
                        <Typography className="mx-10 text-white text-center " variant="h3">
                            Let's begin your fundraising journey
                        </Typography>
                        <div className="w-full">
                            <Typography className="m-10 font-normal text-sm flex justify-center text-white">
                                We're here to guide you every step of the way.
                            </Typography>
                        </div>
                    </div>
                </section>
                <section className="bg-white rounded-r-lg w-full py-8">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                        <div className="w-fit">
                            <div className={activeStep == 1 ? "w-full" : "hidden"}>
                                <Typography className="mb-2" variant="h6">
                                    Where will the funds go?
                                </Typography>
                                <Typography className="font-normal text-sm">
                                    Choose the location where you plan to withdraw your funds.
                                </Typography>
                                <div className="w-full">

                                    <Typography variant="small" color="blue-gray" className="my-3 font-medium">
                                        Country
                                    </Typography>
                                    <Select
                                        size="lg"
                                        label="Select Country"
                                        selected={(element) =>
                                            element &&
                                            cloneElement(element, {
                                                disabled: true,
                                                className:
                                                    "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                                            })
                                        }
                                    >
                                        {countries.map(({ name, flags }) => (
                                            <Option key={name} value={name} className="flex items-center gap-2">
                                                <img
                                                    src={flags.svg}
                                                    alt={name}
                                                    className="h-5 w-5 rounded-full object-cover"
                                                />
                                                {name}
                                            </Option>
                                        ))}
                                    </Select>
                                    <Typography variant="small" color="blue-gray" className="my-3 font-medium">
                                        What are you fundraising for?
                                    </Typography>
                                    <Select label="Select">
                                        <Option>Fundraise for Yourself</Option>
                                        <Option>Fundraise for friends and family</Option>
                                        <Option>Fundraise for Charity</Option>
                                    </Select>
                                    <Typography variant="small" color="blue-gray" className="my-3 font-medium">
                                        What would be your fundraising goal in Us dollars?
                                    </Typography>
                                    <Input
                                        size="lg"
                                        type="number"
                                        placeholder="0000"
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        labelProps={{
                                            className: "before:content-none after:content-none",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={activeStep == 2 ? "w-full" : "hidden"}>
                                <Typography className="mb-10 font-semibold hover:cursor-pointer hover:text-yellow-900" onClick={() => setActiveStep(activeStep - 1)} >
                                    Go back
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="my-3 font-medium">
                                    Describe why you're fundraising?
                                </Typography>
                                <TextEditorInput />
                            </div>
                            <div className={activeStep == 3 ? "w-full" : "hidden"}>
                                <Typography className="mb-10 font-semibold hover:cursor-pointer hover:text-yellow-900" onClick={() => setActiveStep(activeStep - 1)} >
                                    Go back
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="my-3 font-medium">
                                    Upload a sample image for campaign
                                </Typography>
                                <div className="flex flex-col space-y-4 w-full">
                                    <Card className="w-80">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-medium
        file:bg-blue-50 file:text-yellow-900/80
        hover:file:bg-blue-100
        hover:cursor-pointer
      "
                                        />
                                        {selectedImage && (
                                            <div className="mt-4 p-4">
                                                <Typography variant="small">Preview</Typography>
                                                <img
                                                    src={URL.createObjectURL(selectedImage)}
                                                    alt="Selected Preview"
                                                    className="w-full h-auto rounded-md border mt-2"
                                                />
                                            </div>
                                        )}
                                    </Card>
                                </div>
                                <Typography variant="small" color="blue-gray" className="my-3 font-medium">
                                    If any video describing a story. Paste a link below
                                </Typography>
                                <Input
                                    size="lg"
                                    type="text"
                                    placeholder="https://www.youtube.com/xyzdf"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <div className="w-full flex justify-end mt-4">
                                <Button className="mt-6 bg-yellow-900 w-2/4" fullWidth onClick={() => setActiveStep(activeStep + 1)}>
                                    {activeStep == 3 ? "Create campaign" : "Continue"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default StartCampaign;