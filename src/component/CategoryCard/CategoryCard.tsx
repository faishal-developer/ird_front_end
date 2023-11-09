"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useEffect,useState} from 'react';
import { catCardClass } from "@/tailwindClassnames/categoryCard";


const CategoryCard = ({result,subCategories,post}:{result:any,subCategories:any,post:any}) => {
    const [subcatId,setSubcatId]=useState<string | null>('')
    let searchParams = new URLSearchParams(window.location.search);
        const param1 = searchParams.get('subcat');

    useEffect(()=>{
        setSubcatId(param1)
    },[])
    return ( 
        <div className={catCardClass.container}>
            <h2 className={catCardClass.cat_h2}>Category</h2>
            <div className={catCardClass.search_cont}>
                <FontAwesomeIcon className={catCardClass.search_icon} icon={faMagnifyingGlass}/>
                <input placeholder="Search Categories" className=" w-full h-9 outline-0" type="text"/>
            </div>
            <div className={catCardClass.cat_cont}>
                {
                    result?.data?.map((item:any)=>(
                        <>
                        <Link href={`/dua/${item._id}`} key={item._id}>
                            <div className={catCardClass.cat_card_cont}>
                                <div className={catCardClass.cat_img}>
                                    <Image width={40} height={40} src={item.image} alt={item.title}/>
                                </div>
                                <div>
                                    <h4 className="font-medium	">{item.title}</h4>
                                    <small className="text-gray">Subcategory:{item._id==="654b59b21c49866787dc2581"?7:1}</small>
                                </div>
                            </div>
                        </Link>
                        {
                            subCategories?.data?.[0]?.cat_id===item._id ? (
                                <div className={catCardClass.subcat_cont}>
                                    {subCategories?.data?.map((subcat:any)=>(
                                        <>
                                        {console.log(subcatId,"subcatId")}
                                        <div className={catCardClass.subcat_body} key={subcat._id}>
                                            <div className={catCardClass.subcat_dot}></div>
                                            <Link onClick={()=>setSubcatId(subcat._id)} href={`#${subcat._id}`} className="font-sm">{subcat.title}</Link>
                                        </div>
                                        <div>
                                            {subcat._id===subcatId && post[subcat.title].map((postitem:any,i:number)=>(
                                                <div className="flex ms-8" key={postitem._id}>
                                                    <Image width={20} height={20} src={'https://duaruqyah.com/assets/duaarrow.svg'} alt="icon"/>
                                                    <Link href={`#${subcat._id+i}`} className="text-sm">{subcat.title} #{i+1}</Link>
                                                </div>
                                            ))}
                                        </div>
                                        </>
                                    ))}
                                </div>
                            ):''
                        }
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryCard;