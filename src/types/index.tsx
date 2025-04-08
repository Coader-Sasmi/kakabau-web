export type SubmenuItem= {
    id: number;
    title: string;
    url: string;
}

export type navArrType={
    id:number
    title:string
    url:string
    submenu?: SubmenuItem[];
}
