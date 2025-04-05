import { navArrType } from "@/types";

export const navArr:navArrType[]= [
    {
        id: 1,
        title: 'Dashboard',
        url: '/Dashboard'
    },
    {
        id: 2,
        title: 'RentalServices',
        url: '/RentalServices',
        submenu: [
            {
                id: 201,
                title: 'Vender List',
                url: '/rental-services/vender-list'
            },
            {
                id: 202,
                title: 'Vender Order Details',
                url: '/rental-services/vender-order-details'
            }
        ]
    },
    {
        id: 3,
        title: 'Entertainment',
        url: '/Entertainment'
    },
    {
        id: 4,
        title: 'Healthcare Service',
        url: '/HealthcareService'
    },
    {
        id: 5,
        title: 'Event Management',
        url: '/EventManagement'
    },
    {
        id: 6,
        title: 'Education',
        url: '/Education'
    },
    {
        id: 7,
        title: 'Notifications',
        url: '/Notifications'
    },
    {
        id: 8,
        title: 'Home Services',
        url: '/HomeServices'
    },
    {
        id: 9,
        title: 'Revenue',
        url: '/Revenue'
    }
    
]