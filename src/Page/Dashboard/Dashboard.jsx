import { Link, NavLink, Outlet } from "react-router-dom";
import {
    MdDashboard,
    MdNotifications,
    MdSettings,
    MdGroup,
    MdAdminPanelSettings,
} from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { IoPeople } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { CiMobile2, CiLogout } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";

const Dashboard = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            {/* Sidebar Drawer */}
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay lg:hidden"
                ></label>
                <ul className="menu bg-gray-50 shadow-lg min-h-full md:w-60 p-0">
                    {/* Close button for mobile */}
                    <div className="flex justify-end lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="close sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </label>
                    </div>

                    {/* Sidebar content here */}

                    <div className="mt-5 mb-2">
                        {/* <p className="w-3/4 mx-auto mb-4" /> */}
                        <div className="flex items-baseline gap-2 justify-center mb-5">
                            <img src="/logo.png" alt="" />
                        </div>
                        <div className="bg-[#007ABC] py-4 px-4 w-full ">
                            <p className="text-lg font-semibold text-white">
                                rabiussanym
                            </p>
                        </div>
                    </div>

                    <div className="p-4">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 mb-3 ${
                                        isActive
                                            ? " border-l-4 border-blue-500"
                                            : ""
                                    }`
                                }
                            >
                                <FaHome className="text-xl mr-0" />
                                <span className="font-semibold">Dashboard</span>
                            </NavLink>
                        </li>

                        {/* Notifications with Logs submenu */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("notifications")}
                                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-200 mb-3"
                            >
                                <div className="flex items-center">
                                    <MdNotifications className="text-xl mr-3" />
                                    <span className="font-semibold">
                                        Notifications
                                    </span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "notifications"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </button>
                            {openDropdown === "notifications" && (
                                <ul className="pl-2 mt-1 space-y-1">
                                    <li>
                                        <NavLink
                                            to="/notifications"
                                            className={({ isActive }) =>
                                                `flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-200 mb-3 ${
                                                    isActive
                                                        ? " border-l-4 border-blue-500"
                                                        : ""
                                                }`
                                            }
                                        >
                                            <GoDotFill className="mr-2" />
                                            <span className="font-semibold">
                                                Logs
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* App Settings */}
                        <li>
                            <NavLink to=''
                                onClick={() => toggleDropdown("appSettings")}
                                className={({ isActive }) =>
                                    `flex items-center justify-between p-2 text-gray-700 rounded-lg hover:bg-gray-200 mb-3 ${
                                        isActive
                                            ? " border-l-4 border-blue-500"
                                            : ""
                                    }`
                                }
                            >
                                <div className="flex items-center">
                                    <CiMobile2 className="text-xl mr-3" />
                                    <span className="font-semibold">
                                        App Settings
                                    </span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "appSettings"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </NavLink>
                        </li>


                        {/* Membership with Corporate Employees and User Profile submenu */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("membership")}
                                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-200 mb-3"
                            >
                                <div className="flex items-center">
                                    <MdGroup className="text-xl mr-3" />
                                    <span className="font-semibold">
                                        Membership
                                    </span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "membership"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </button>
                            {openDropdown === "membership" && (
                                <ul className="pl-2 mt-1 space-y-1">
                                    <li>
                                        <NavLink
                                            to="/membership/corporate-employees"
                                            className={({ isActive }) =>
                                                `flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-200 ${
                                                    isActive
                                                        ? "text-blue-500"
                                                        : ""
                                                }`
                                            }
                                        >
                                            <GoDotFill className="mr-2" />
                                            <span className="font-semibold">
                                                Corporate Employees
                                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/membership/user-profile"
                                            className={({ isActive }) =>
                                                `flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-200 mb-3 ${
                                                    isActive
                                                        ? "text-blue-500"
                                                        : ""
                                                }`
                                            }
                                        >
                                            <GoDotFill className="mr-2" />
                                            <span className="font-semibold">
                                                User Profile
                                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Offers */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("offers")}
                                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-200 mb-3"
                            >
                                <div className="flex items-center">
                                    <IoPeople className="text-xl mr-3" />
                                    <span className="font-semibold">
                                        Offers
                                    </span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "offers"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </button>
                        </li>

                        {/* Admin Reports */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("adminReports")}
                                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-200 mb-3"
                            >
                                <div className="flex items-center">
                                    <MdGroup className="text-xl mr-3" />
                                    <span className="font-semibold">
                                        Admin Reports
                                    </span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "adminReports"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </button>
                        </li>

                        {/* Admin */}
                        <li>
                            <button
                                onClick={() => toggleDropdown("admin")}
                                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-200 mb-3"
                            >
                                <div className="flex items-center">
                                    <IoPeople className="text-xl mr-3" />
                                    <span className="font-semibold">Admin</span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "admin"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </button>
                        </li>

                        {/* Customer Service */}
                        <li>
                            <button
                                onClick={() =>
                                    toggleDropdown("customerservice")
                                }
                                className="flex items-center justify-between w-full p-2 text-gray-700 rounded-lg hover:bg-gray-200"
                            >
                                <div className="flex items-center">
                                    <IoMdSettings className="text-xl mr-3" />
                                    <span className="font-semibold">
                                        Customer Service
                                    </span>
                                </div>
                                <HiChevronDown
                                    className={`transform transition-transform ${
                                        openDropdown === "customerservice"
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
                            </button>
                        </li>
                    </div>

                    {/* Account Logout */}
                    <li>
                        <a
                            href="#"
                            className="flex items-center mx-auto justify-center text-gray-700 border-t border-gray-200 w-full pt-4 rounded-lg hover:bg-gray-200  lg:mt-20"
                        >
                            <CiLogout className="text-2xl mr-1 text-blue-600 font-bold text-center" />
                            <span className="font-semibold">
                                Account Logout
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="drawer-content flex flex-col px-4">
                {/* Navbar */}
                <div className="navbar shadow-md sm:w-full md:w-full">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                    </div>
                    <div className=" flex-1 font-semibold font-bold p-2">
                        Dashboard
                    </div>
                </div>

                {/* Page Content */}
                <div className="mt-4 rounded-md overflow-hidden shadow-md">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
