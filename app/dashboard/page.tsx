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
                <div className="flex-none w-80">

                </div>
                <div className="flex">
                    <TableWithStripedRows></TableWithStripedRows>
                </div>
            </div>
        </>
    )
}

export default Dashboard