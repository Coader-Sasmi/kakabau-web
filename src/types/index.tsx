export type SubmenuItem= {
    id: number;
    title: string;
    url: string;
}

export type navArrType={
    id:Number
    title:String
    url:String
    submenu?: SubmenuItem[];
}
export type VenderIdType={
    id:"String"
}
export type VenderTableArrType ={
    id:number
    name:String
    phone: String
    email : String
}
export type DetailsArrType={
    id:String
}