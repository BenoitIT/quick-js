import { Typography, Button, IconButton } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Campaign = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-green-900/90 min-h-[100vh] pt-24 max-h-fit pb-4">
            <div className="container mx-auto p-8 bg-white rounded shadow">
                <section>
                    <Typography className="mb-4" variant="h3">
                        Lorem ipsum dolor
                    </Typography>
                    <div className="mx-auto  grid  grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="w-full">
                            <img
                                src="https://media.gettyimages.com/id/1229923407/photo/prosthetics-center-in-gaza-gives-hope-to-palestinians.jpg?s=2048x2048&w=gi&k=20&c=hMYaFVXpqURsyhldws0O6rWEUluof0MnRt-b0X9iV1Y="
                                alt="pink blazer"
                                className="h-[400px] w-full rounded object-cover aspect-auto"
                            />
                            <Typography className="mt-2 font-normal text-sm">
                                (person name created this campaigne due to the reason) Lorem ipsum dolor
                            </Typography>
                            <hr className="my-4 border-gray-300" />
                            <p className="text-sm leading-7">
                                Unbelievably, it's the 14th year of this thing.

                                What is it?

                                Improbably, the night before Christmas, people send me photos of their domestic sleeping arrangements, which are usually highly compromised by there being Too Many People At The Inn And Not Enough Beds (etc)

                                These pictures range of dangerously chaotic to hilariously austere, and it has become a form
                                of Christmas entertainment that's right up there with Morecambe & Wise or Die Hard.

                                Due to the activities of a risible manchild, I'm not posting on Twitter any more, and while I'm sure there'll be some activity there (and probably on Threads too) I'll be on Bluesky here.

                                Anyway, the point is that many people's Xmas sleeping arrangements are far, far worse than ours. Centrepoint estimate that nearly 25,000 young people will face homelessness
                                this winter in England alone. To that end, maybe you can spare them a donation, to help provide them with housing and support.
                            </p>
                            <div className="mt-6 flex md:flex-row gap-2 flex-col">
                                <Button className="bg-white border md:min-w-[300px] min-w-fit capitalize text-black hover:bg-green-900/80">Share now</Button>
                                <Button className="bg-white border md:min-w-[300px] min-w-fit capitalize text-black hover:bg-green-900/80" onClick={() => navigate("donate")}>Donate now</Button>
                            </div>
                            <hr className="my-6 border-gray-300" />
                            <Typography className="mb-4" variant="h4">
                                Organiser
                            </Typography>
                            <div className="flex md:flex-row gap-4 flex-col">
                                <li className="flex items-center gap-4">
                                    <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                                        <UserIcon color="black" className="w-4 h-4" />
                                    </IconButton>
                                    <div className="flex flex-col">
                                        <Typography className="font-normal text-sm">John chillwell doe</Typography>
                                        <Typography className="font-normal text-sm"><span className="text-black font-medium">Organiser</span></Typography>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4 mt-2">
                                    <IconButton className="rounded-full border border-white/20 bg-white/20 p-2 bg-gray-200">
                                        <UserIcon color="black" className="w-4 h-4" />
                                    </IconButton>
                                    <div className="flex flex-col">
                                        <Typography className="font-normal text-sm">John xxxx</Typography>
                                        <Typography className="font-normal text-sm"><span className="text-black font-medium">Benefiary</span></Typography>
                                    </div>
                                </li>
                            </div>
                            <div className="flex flex-col mt-6">
                                <Typography className="mb-4" variant="h5">
                                    Comments
                                </Typography>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <Typography className="font-semibold text-sm">Jamess</Typography>
                                        <Typography className="font-normal text-sm">some thing needs to done for help</Typography>
                                    </div>
                                    <div>
                                        <Typography className="font-semibold text-sm">Peter</Typography>
                                        <Typography className="font-normal text-sm">some thing needs to done for help</Typography>
                                    </div>
                                    <Link className="text-sm hover:text-yellow-900">More comments...</Link>
                                </div>
                            </div>
                        </div>
                        <div className="container px-4 flex justify-center">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Campaign;