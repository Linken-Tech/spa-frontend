'use client';
import SidebarCollapse from "./components/Sidebar/Sidebar"
import TableWithStripedRows from "./components/Table/StripedRowTable"

const Dashboard = () => {
    return (
        <>
            <div className="flex h-full">
                <div className="flex-none w-14 bg-green-900">
                    <SidebarCollapse></SidebarCollapse>
                </div>
                <div className="flex flex-col w-full">
                    <span>testing</span>
                    <div className="flex-none h-14 bg-gray-400">

                    </div>
                    <div className="grow bg-gray-300 flex items-center justify-center">
                        <div className="w-4/5">
                            <TableWithStripedRows></TableWithStripedRows>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard