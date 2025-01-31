import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Radio, Typography, Input, IconButton
} from "@material-tailwind/react";



const WithDrawCard = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button onClick={handleOpen} className="text-xs capitalize bg-green-900 hover:bg-yellow-900 p-1 px-2 font-normal rounded mt-2">
                withdraw
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="w-fit"
            >
                <DialogHeader className="text-green-900">Withdraw fund</DialogHeader>
                <DialogBody className="text-gray-800">
                    <p className="text-gray-900 font-medium">Your <b className="text-gray-900">cash account</b> current balance <b className="text-gray-900">400,000</b></p>
                    <p className="text-base mt-1">Please note, A <b className="text-gray-800">15%</b> service deduction will be applied. Your total after deduction is <b className="text-gray-800">320000</b></p>
                    <div className="text-xs mt-4">
                        <Radio
                            name="terms"
                            label={
                                <Typography
                                    className="flex font-normal text-sm"
                                >
                                    I withdraw
                                    <Typography
                                        as="a"
                                        href="#"
                                        className="hover:text-blueg-gray-900 font-medium transition-colors text-sm"
                                    >
                                        &nbsp;total amount
                                    </Typography>
                                    .
                                </Typography>
                            }
                        />
                        <Radio
                            name="terms"
                            label={
                                <Typography
                                    className="flex font-normal text-sm"
                                >
                                    I will not withdraw
                                    <Typography
                                        as="a"
                                        href="#"
                                        className="hover:text-blueg-gray-900 font-medium transition-colors text-sm"
                                    >
                                        &nbsp;total amount
                                    </Typography>
                                    .
                                </Typography>
                            }
                        />
                    </div>
                    <div className="md:w-80 w-[80%] m-4">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-1 font-normal"
                        >
                            Enter amount
                        </Typography>
                        <div className="relative w-full">
                            <Input
                                type="number"
                                value={value}
                                onChange={(e) => setValue(Number(e.target.value))}
                                className="!border-t-blue-gray-200 pl-4 placeholder:text-blue-gray-300 placeholder:opacity-100  focus:!border-t-gray-900 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                            <div className="absolute right-1 top-1 flex gap-0.5">
                                <IconButton
                                    size="sm"
                                    className="rounded bg-transparent text-black"
                                    onClick={() => setValue((cur) => (cur === 0 ? 0 : cur - 1))}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                                    </svg>
                                </IconButton>
                                <IconButton
                                    size="sm"
                                    className="rounded bg-transparent text-black"
                                    onClick={() => setValue((cur) => cur + 1)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                    </svg>
                                </IconButton>
                            </div>
                        </div>
                        <Typography variant="small" color="gray" className="mt-2 text-xs">
                            Adjust the number using the + and - controls.
                        </Typography>
                    </div>
                    <hr />
                    <div className="flex text-xs text-gray-700 w-full justify-center">
                        <div className="w-fit flex flex-col mt-4 lg:-ml-[40%] ml-0 gap-2">
                      <p>account information line 1</p>
                      <p>account information line 2</p>
                      </div>
                    </div>

                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button className="bg-green-900 text-white" onClick={handleOpen}>
                        <span className="text-xs">Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
export default WithDrawCard;