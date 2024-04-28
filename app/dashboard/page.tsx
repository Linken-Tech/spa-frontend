'use client';
import SidebarCollapse from "./components/Sidebar/Sidebar"
import TableWithStripedRows from "./components/Table/StripedRowTable"

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                <div className="flex-none w-14 bg-white">
                    <SidebarCollapse></SidebarCollapse>
                </div>
                <div className="flex-none w-80">

                </div>
                <div className="flex-l mt-64">
                    <TableWithStripedRows></TableWithStripedRows>
                </div>
            </div>
        </>
    )
}

export default Dashboard