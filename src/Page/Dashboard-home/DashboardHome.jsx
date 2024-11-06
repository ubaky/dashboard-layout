import { useState } from "react";
import {
    
    MdPerson,
    MdMedicalServices,
    MdDescription,
    MdCreditCard,
} from "react-icons/md";
import { IoMdLogIn, IoMdPersonAdd } from "react-icons/io";
import ReactApexChart from 'react-apexcharts';

const DashboardHome = () => {
    const metrics = [
        {
            title: "Login Today",
            value: "0",
            icon: IoMdLogIn,
        },
        {
            title: "Registration Today",
            value: "0",
            icon: IoMdPersonAdd,
        },
        {
            title: "Total Registration",
            value: "0",
            icon: MdPerson,
        },
        {
            title: "Doctor Consultation Count",
            value: "0",
            icon: MdMedicalServices,
        },
        {
            title: "Policy Owner Served",
            value: "0",
            icon: MdDescription,
        },
        {
            title: "Life Card Accessed",
            value: "0",
            icon: MdCreditCard,
        },
    ];



    const [chartData] = useState({
        series: [
            {
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
            },
            title: {
                text: "Product Trends by Month",
                align: "left",
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                ],
            },
        },
    });


    const userDataCard = [
        {
            title: "Users Registration Monthly Activity Summary",
            content: (
                <div className="">
                    <div id="chart">
                        <ReactApexChart
                            options={chartData.options}
                            series={chartData.series}
                            type="line"
                            height={350}
                        />
                    </div>
                    <div id="html-dist"></div>
                </div>
            ),
        },
        {
            title: "Membership Type",
            content: "Membership data goes here",
        },
        {
            title: "Users based on Policy Type",
            content: "Policy type data goes here",
        },
    ];

  

    const [selectedOption, setSelectedOption] = useState("Daily");

    const options = ["Monthly", "Weekly", "Daily"];

    return (
        <div className="bg-gray-100 p-2">
            <div
                className="text-gray-300  flex gap-1 flex-col 
        lg:flex-row translate-all duration-300"
            >
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm  hover:shadow-md transition-shadow"
                            >
                                <div>
                                    <div>
                                        <h3 className="text-xs text-black font-medium mb-5 px-4 pt-5 ">
                                            {metric.title}
                                        </h3>
                                    </div>

                                    <hr className="w-full" />
                                    <div className="flex justify-between items-center px-4 pb-5">
                                        <p className="text-2xl mt-2 text-black">
                                            {metric.value}
                                        </p>

                                        <metric.icon
                                            className="text-black text-xl"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* // */}

            <div className="my-4">
                <div className="p-6 rounded-lg shadow-md w-full mx-auto bg-white ">
                    {/* Header */}
                    <div className="flex md:flex-row flex-col justify-between items-center">
                        <h2 className="text-lg font-semibold ">Customer Log</h2>

                        {/* Options */}
                        <div className="flex border-gray-300 border-b-2 justify-between gap-3 sm:space-x-1 cursor-pointer">
                            {options.map((option) => (
                                <a
                                    key={option}
                                    onClick={() => setSelectedOption(option)}
                                    className={`text-sm font-medium px-1 pb-1 ${
                                        selectedOption === option
                                            ? "text-blue-500 border-b-2 border-blue-600"
                                            : "text-gray-500"
                                    }`}
                                >
                                    {option}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* No Data Message */}
                    <div className="mt-6 text-black">
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-base text-black">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="">
                                        <th>1</th>
                                        <td>Cy Ganderton</td>
                                        <td>Quality Control Specialist</td>
                                        <td>Blue</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Hart Hagerty</td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Brice Swyre</td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Users Registration Monthly Activity Summary */}

                        {userDataCard.map((userData, index) => (
                            <div
                                key={index}
                                className={`bg-white p-4 rounded-lg shadow-sm  border border-gray-200 min-h-[200px] ${index == 0 && "col-span-2"}`}
                            >
                                <h3 className="text-lg font-semibold mb-4">
                                    {userData.title}
                                </h3>
                                <div className="flex-1">
                                    {/* Chart or data component goes here */}
                                    <p>{userData.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
