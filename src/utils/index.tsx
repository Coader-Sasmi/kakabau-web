import { navArrType } from "@/types";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CarRentalIcon from '@mui/icons-material/CarRental';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const navArr:navArrType[]= [
    {
        id: 1,
        title: 'Dashboard',
        url: '/Dashboard',
        icon: <DashboardIcon />
    },
    {
        id: 2,
        title: 'RentalServices',
        url: '/RentalServices',
        icon: <CarRentalIcon />,
        icons: <ArrowDropDownIcon />,
        submenu: [
            {
                id: 201,
                title: 'Vender',
                url: '/RentalServices/vender'
            },
            {
                id: 202,
                title: 'Bookings',
                url: '/RentalServices/bookings'
            }
        ]
    },
    {
        id: 3,
        title: 'Entertainment',
        url: '/Entertainment',
        icon:<SportsTennisIcon />,
        icons: <ArrowDropDownIcon />,
        submenu: [
            {
                id: 301,
                title: 'Vender',
                url: '/Entertainment/vender'
            },
            {
                id: 302,
                title: 'Bookings',
                url: '/Entertainment/bookings'
            }
        ]
    },
    {
        id: 4,
        title: 'Healthcare Service',
        url: '/HealthcareService',
        icon:<LocalHospitalIcon />,
        icons: <ArrowDropDownIcon />,
        submenu: [
            {
                id: 401,
                title: 'Vender',
                url: '/HealthcareService/vender'
            },
            {
                id: 402,
                title: 'Bookings',
                url: '/HealthcareService/bookings'
            }
        ]
    },
    {
        id: 5,
        title: 'Event Management',
        url: '/EventManagement',
        icon:<EventIcon />,
        icons: <ArrowDropDownIcon />,
        submenu: [
            {
                id: 501,
                title: 'Vender',
                url: '/EventManagement/vender'
            },
            {
                id: 502,
                title: 'Bookings',
                url: '/EventManagement/bookings'
            }
        ]
    },
    {
        id: 6,
        title: 'Education',
        url: '/Education',
        icon:<SchoolIcon />,
        icons: <ArrowDropDownIcon />,
        submenu: [
            {
                id: 601,
                title: 'Vender',
                url: '/Education/vender'
            },
            {
                id: 602,
                title: 'Bookings',
                url: '/Education/bookings'
            }
        ]
    },
    {
        id: 7,
        title: 'Notifications',
        url: '/Notifications',
        icon: <NotificationsIcon />,
    },
    {
        id: 8,
        title: 'Home Services',
        url: '/HomeServices',
        icon:<HomeIcon />,
    },
    {
        id: 9,
        title: 'Revenue',
        url: '/Revenue',
        icon:<VisibilityIcon />,
    }
    
]