'use server';

import Image from "next/image";
import icon from "../../assets/svg/icons.svg";
import { sidebarUtils } from "./sidebar.utils";
import Link from "next/link";

const Sidebar = () => {
    return (
        <>
        <div className="hidden xl:block w-24 float-left bg-white m-7 rounded-3xl">
            <div className="h-[91vh] w-24 px-5 py-7 overflow-auto">
                <div className="mb-16 hidden xl:block">
                    <Image width={50} height={50} src={'https://duaruqyah.com/assets/dua-logo.svg'} alt="logo"/>
                </div>
                <div className="">
                    {
                        sidebarUtils.map(item=>(
                            <div className="w-11 h-11 bg-secondary border-2 border-white duration-300 hover:border-secondary  p-3 text-center rounded-3xl my-7" key={item.title}>
                                <Link className="" href={''}>
                                    <Image width={20} height={20} src={item.icon} alt="icon"/>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="bg-c_green p-3 rounded-xl mt-14">
                    <Image width={30} height={30} alt="icon" src={icon}/>
                </div>
            </div>
            
        </div>
        <div className=" z-10 flex bg-white fixed w-full justify-evenly bottom-0 xl:hidden box-shadow">
                {
                    sidebarUtils.map(item=>(
                        <div className="w-11 h-11 bg-secondary border-2 border-white duration-300 hover:border-secondary  p-3 text-center rounded-3xl my-7 " key={item.title}>
                            <Link className="" href={''}>
                                <Image width={20} height={20} src={item.icon} alt="icon"/>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Sidebar;