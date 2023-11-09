import { apiEndPoints } from '@/apiService/apiservice';
import CategoryCard from '@/component/CategoryCard/CategoryCard';
import { fetchData, fetchSubCategories, sortByCategories } from '@/helper/commonFunction';
import { faPlay, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const DuaPage = async({params}:any) => {
    const result= await fetchData(apiEndPoints.categories);
    const subCategories=await fetchSubCategories(apiEndPoints.subCate,{cat_id:params.duaId});
    const posts= await fetchSubCategories(apiEndPoints.posts,{cat_id:params.duaId})
    const postsByCategory = sortByCategories(posts.data,subCategories.data);
    
    return (
        <div className='flex'>
            <CategoryCard post={postsByCategory} subCategories={subCategories} result={result}/>
            <div className='overflow-scroll h-[84vh] w-8/12 mx-3 text-base'>
                {Object.keys(postsByCategory).map((item)=>(
                        <div id={postsByCategory[item][0].subcat_id} key={item}>
                            <div className='bg-white p-5 rounded-xl'>
                                <span className='text-c_green'>Section: </span> {item}
                            </div>
                            <div>
                                {postsByCategory[item].map((post:any,i:number)=>(
                                    <div id={post.subcat_id+i} className='bg-white my-5 p-5 rounded-xl' key={post._id}>
                                        <div className='flex'>
                                            <Image width={30} height={30} src={'https://duaruqyah.com/assets/duacard.svg'} alt="allah"/>
                                            <p className='text-c_green ms-3'> {i+1}. {item} #{i+1}</p>
                                        </div>
                                        <div className='text-lg'>
                                            <p className='my-3'>{post.title}</p>
                                            <p dir='rtl' className='text-3xl'>{post?.ayat}</p>
                                            {
                                                post?.transileration?(
                                                    <p className='italic my-3'><span className='font-bold'> Transliteration:</span>{post?.transileration}</p>
                                                ):''
                                            }
                                            {
                                                post.translation?(
                                                    <p className='text-gray'><span className='font-bold'>Translation:</span>{post?.translation}</p>
                                                ):''
                                            }
                                            <p className='my-3'>
                                                <span className='font-bold text-c_green'>Reference</span>
                                                <br/>
                                                {post?.reference}
                                            </p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className=''>
                                                <audio src={post?.audio}/>
                                                <div className='flex items-center justify-center w-10 h-10 text-center rounded-3xl text-white bg-c_green'>
                                                    {
                                                        post?.audio?(
                                                            <FontAwesomeIcon className='text-2xl' icon={faPlay}/>
                                                        ):''
                                                    }
                                                </div>
                                            </div>
                                            <div className='flex justify-between gap-5'>
                                                <Image src={'https://duaruqyah.com/assets/others/copy.svg'} width={22} height={22} alt="icon"/>
                                                <Image src={'https://duaruqyah.com/assets/others/bookmark.svg'} width={22} height={22} alt="icon"/>
                                                <Image src={'https://duaruqyah.com/assets/others/plan.svg'} width={22} height={22} alt="icon"/>
                                                <Image src={'https://duaruqyah.com/assets/others/share.svg'} width={22} height={22} alt="icon"/>
                                                <Image src={'https://duaruqyah.com/assets/others/report.svg'} width={22} height={22} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DuaPage;