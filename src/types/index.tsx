import { ReactNode } from "react";

export type SubmenuItem= {
    id: number;
    title: string;
    url: string;
}

// export type navArrType={
//     id:number
//     title:string
//     url:string
//     icon :any
//     icons?: any
//     submenu?: SubmenuItem[];
   
// }


export type navArrType = {
    id: number;
    title: string;
    url: string;
    icon: ReactNode; // or JSX.Element depending on what you're rendering
    icons?: ReactNode;
    submenu?: SubmenuItem[];
  };