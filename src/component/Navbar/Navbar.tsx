import Image from "next/image";
import angle from "../../assets/svg/angle.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="flex bg-white xl:bg-trans justify-between items-center p-3 xl:p-5">
            <div className="flex items-center font-2xl">
                <div className="flex items-center xl:hidden">
                    <Image width={50} height={50} src={'https://duaruqyah.com/assets/dua-logo.svg'} alt="logo"/>
                    <h2>Dua & Ruqyah</h2>
                </div>
                <h2 className="font-2xl hidden xl:block">Duas Page</h2>
            </div>
            <div className="flex items-center">
                <div className="flex me-4 xl:me-20 items-center bg-secondary xl:bg-white pe-1 px-4 py-1 rounded">
                    <input className="bg-secondary xl:bg-white outline-0" type="text"/>
                    <div className="bg-white xl:bg-secondary p-1 rounded">
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass}/> */}
                        {/* Search */}
                        <FontAwesomeIcon className="w-5 h-5 text-xl text-gray mt-2 ms-2 me-2" icon={faMagnifyingGlass}/>
                    </div>
                </div>
                <div className="flex items-center me-4">
                    <Image width={50} height={50} src={"https://duaruqyah.com/assets/settings/profile.svg"} alt="user"/>
                    <Image src={angle} alt="angle"/>
                </div>
                <div className="block xl:hidden">
                    <Image width={20} height={20} src={'https://duaruqyah.com/assets/tab/home/settings.svg'} alt="settings"/>
                </div>

            </div>
        </div>
    );
};

export default Navbar;