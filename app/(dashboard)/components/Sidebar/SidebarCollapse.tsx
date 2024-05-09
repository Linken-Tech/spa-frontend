import React, { useEffect, useState } from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { emptyProps } from "@/app/definition/definition";

const SidebarCollapse: React.FC<emptyProps> = (passEmptyProps) => {
    const [open, setOpen] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = (value: any) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton variant="text" color="white" size="lg" onClick={openDrawer} {...passEmptyProps}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-2" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer} {...passEmptyProps}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="w-full"
                    {...passEmptyProps}
                >
                    <div className="mb-2 flex items-center gap-4 p-8 bg-green-900">
                        {/* <img
                            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                            alt="brand"
                            className="h-8 w-8"
                        /> */}
                        <Typography variant="h5" color="white" {...passEmptyProps}>
                            Sidebar
                        </Typography>
                    </div>
                </Card>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                    {...passEmptyProps}
                    >
                    <div className="p-2">
                        <Input
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            label="Search"
                            {...passEmptyProps}
                            crossOrigin=""
                        />
                    </div>
                    <List {...passEmptyProps}>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                        }`}
                                />
                            }
                            {...passEmptyProps}
                        >
                            <ListItem className="p-0" selected={open === 1} {...passEmptyProps}>
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className="border-b-0 p-3"
                                    {...passEmptyProps}
                                >
                                    <ListItemPrefix {...passEmptyProps}>
                                        <PresentationChartBarIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal" {...passEmptyProps}>
                                        Dashboard
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0" {...passEmptyProps}>
                                    <ListItem {...passEmptyProps}>
                                        <ListItemPrefix {...passEmptyProps}>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Analytics
                                    </ListItem>
                                    <ListItem {...passEmptyProps}>
                                        <ListItemPrefix {...passEmptyProps}>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Reporting
                                    </ListItem>
                                    <ListItem {...passEmptyProps}>
                                        <ListItemPrefix {...passEmptyProps}>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Projects
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <Accordion
                            open={open === 2}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                        }`}
                                />
                            }
                            {...passEmptyProps}
                        >
                            <ListItem className="p-0" selected={open === 2} {...passEmptyProps}>
                                <AccordionHeader
                                    onClick={() => handleOpen(2)}
                                    className="border-b-0 p-3"
                                    {...passEmptyProps}
                                >
                                    <ListItemPrefix {...passEmptyProps}>
                                        <ShoppingBagIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    <Typography color="blue-gray" className="mr-auto font-normal" {...passEmptyProps}>
                                        E-Commerce
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0" {...passEmptyProps}>
                                    <ListItem {...passEmptyProps}>
                                        <ListItemPrefix {...passEmptyProps}>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Orders
                                    </ListItem>
                                    <ListItem {...passEmptyProps}>
                                        <ListItemPrefix {...passEmptyProps}>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Products
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>
                        <hr className="my-2 border-blue-gray-50" />
                        <ListItem {...passEmptyProps}>
                            <ListItemPrefix {...passEmptyProps}>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <ListItem {...passEmptyProps}>
                            <ListItemPrefix {...passEmptyProps}>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                </Card>
            </Drawer>
        </>
    );
}

export default SidebarCollapse