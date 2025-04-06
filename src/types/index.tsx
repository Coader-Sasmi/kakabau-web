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
export type VenderIdType={
    id:"string"
}
export type VenderTableArrType ={
    id:number
    name:string
    phone: string
    email : string
}
export type DetailsArrType={
    id:string
}