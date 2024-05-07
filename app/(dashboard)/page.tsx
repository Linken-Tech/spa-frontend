'use client';
import { useState, useEffect } from "react";
import TableWithStripedRows from "./components/Table/StripedRowTable"
import DefaultSidebar from "./components/Sidebar/Sidebar";
import { BreadcrumbsWithHomeIcon } from "./components/Breadcrumbs/Breadcrumbs";

const Dashboard = () => {
    const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false)

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobileScreen(window.innerWidth < 768);
        }
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    })
    return (
        <>
            <div className="flex h-full">
                <div className={isMobileScreen ? "flex-none w-14 bg-green-900" : "flex-none w-auto bg-green-900"}>
                    <DefaultSidebar isMobileScreen={isMobileScreen}></DefaultSidebar>
                </div>
                <div className="flex flex-col w-full text-black mt-5">
                    <span>testing</span>
                    <div className="flex h-14 bg-gray-400 items-center">
                        <BreadcrumbsWithHomeIcon></BreadcrumbsWithHomeIcon>
                    </div>
                    <div className="grow bg-gray-300 flex flex-col items-center">
                        <div className="flex items-center h-20 pl-10 mr-auto">
                            <span> title </span>
                        </div>
                        <div className="flex py-4 w-4/5">
                            <TableWithStripedRows></TableWithStripedRows>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard