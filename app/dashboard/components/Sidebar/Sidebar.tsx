import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { emptyProps } from "@/app/definition/definition";
import SidebarCollapse from "./SidebarCollapse";

// const DefaultSidebar: React.FC<emptyProps & { isMobileScreen: boolean }> = ({isMobileScreen, ...passEmptyProps}) => {}

const DefaultSidebar: React.FC<{ isMobileScreen: boolean }> = ({ isMobileScreen }) => {

    const passEmptyProps = (): emptyProps => {
        return {
            placeholder: "",
            onPointerEnterCapture: () => { },
            onPointerLeaveCapture: () => { },
        };
    };
    return (
        <>
            {isMobileScreen ? (
                <SidebarCollapse {...passEmptyProps()}></SidebarCollapse>
            ) : (
                <>
                    <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-transparent" {...passEmptyProps()}>
                        <div className="mb-2 p-4">
                            <Typography variant="h5" color="white" {...passEmptyProps()}>
                                Sidebar
                            </Typography>
                        </div>
                        <List {...passEmptyProps()}>
                            <ListItem className="text-white" {...passEmptyProps()}>
                                <ListItemPrefix {...passEmptyProps()}>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Dashboard
                            </ListItem>
                            <ListItem className="text-white" {...passEmptyProps()}>
                                <ListItemPrefix {...passEmptyProps()}>
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                E-Commerce
                            </ListItem>
                            <ListItem className="text-white" {...passEmptyProps()}>
                                <ListItemPrefix {...passEmptyProps()}>
                                    <InboxIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Inbox
                                <ListItemSuffix {...passEmptyProps()}>
                                    <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full text-white bg-gray-600" />
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem className="text-white" {...passEmptyProps()}>
                                <ListItemPrefix {...passEmptyProps()}>
                                    <UserCircleIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Profile
                            </ListItem>
                            <ListItem className="text-white" {...passEmptyProps()}>
                                <ListItemPrefix {...passEmptyProps()}>
                                    <Cog6ToothIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Settings
                            </ListItem>
                            <ListItem className="text-white" {...passEmptyProps()}>
                                <ListItemPrefix {...passEmptyProps()}>
                                    <PowerIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Log Out
                            </ListItem>
                        </List>
                    </Card>
                </>
            )}
        </>
    );
}

export default DefaultSidebar