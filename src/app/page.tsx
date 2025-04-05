"use client"
import Breadcrum from "@/components/Home/Breadcrum";
import ApexChart from "@/components/Home/Chart";
import MyForm from "@/components/Home/MyForm";



export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-5 ml-14">
    
      {/* <Breadcrum/>
      <ApexChart />
      <MyForm/> */}
      {/* <p>hello</p> */}
       <Breadcrum/>
      <ApexChart/>
    </div>
  );
}
