'use client';
import Dashboard from "../page";
import { usePathname } from "next/navigation";

const Organization = () => {
    const pathName = usePathname()

    return (
        <>
            <Dashboard pathName={pathName}></Dashboard>
        </>
    )
}

export default Organization