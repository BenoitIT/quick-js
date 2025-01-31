import { Input } from "@material-tailwind/react";
const PaymentCard = () => {
    return (
        <div className="bg-gray-50 text-gray-900 lg:p-10 md:p-6 p-2 h-fit rounded w-full border border-gray-100">
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
            <p className="mb-4">Add a new payment method to your account.</p>

            <div className="grid grid-cols-3  gap-4">
                <div className="bg-gray-300 p-4 rounded hover:cursor-pointer">
                    <div className="w-fit h-fit  ">
                        <i className="fa fa-credit-card text-xl mb-2"></i>
                        <span className="block font-normal text-sm">Card</span>
                    </div>
                </div>
                <div className="bg-gray-200 p-4 rounded hover:cursor-pointer">
                    <i className="fab fa-paypal text-xl mb-2"></i>
                    <span className="block font-normal text-sm">Paypal</span>
                </div>
                <div className="bg-gray-200 p-4 rounded hover:cursor-pointer">
                    <i className="fab fa-apple text-xl mb-2"></i>
                    <span className="block font-normal text-sm">Apple</span>
                </div>
            </div>

            <div className="mt-4">
                <label for="name" className="block text-sm mb-2">Name</label>
                <Input label="name" />
            </div>

            <div className="mt-4">
                <label for="city" className="block text-sm mb-2">City</label>
                <Input label="city" />
            </div>

            <div className="mt-4">
                <label for="card-number" className="block text-sm mb-2">Card number</label>
                <Input label="card number" />
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4 w-full">
                <div className="w-full">
                    <label for="expires-month" className="block text-sm mb-2">Expires</label>
                    <Input label="month"  className="w-[130px] outline-none" />
                </div>
                <div className="w-full">
                    <label for="expires-year" className="block text-sm mb-2">Year</label>
                    <Input label="year" className="w-[130px] outline-none" />
                </div >
                <div className="w-full">
                    <label for="cvc" className="block text-sm mb-2">CVC</label>
                    <Input label="cvc" className="w-[130px] outline-none" />
                </div>
            </div>

            <div className="mt-4">
                <button className="bg-green-800 hover:bg-green-700 text-white w-full py-2 rounded">Continue</button>
            </div>
        </div>
    )
}
export default PaymentCard