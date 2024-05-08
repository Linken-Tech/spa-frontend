'use client';
import Dashboard from "../page";
import { usePathname } from "next/navigation";

const Vehicle = () => {
    const pathName = usePathname()

    return (
        <>
            <Dashboard pathName={pathName}></Dashboard>
        </>
    )
}

export default Vehicle