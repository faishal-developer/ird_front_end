import CategoryCard from '@/component/CategoryCard/CategoryCard';
import Navbar from '@/component/Navbar/Navbar';
import Sidebar from '@/component/sidebar/Sidebar';
import React from 'react';

// const fetchData=async()=>{
//     const result = await fetch('https://ird-two.vercel.app/api/v1/categorys');
//     return await result.json();
// }
const Layout = async({children}:{children:React.ReactNode}) => {
    // const result= await fetchData();
    return (
        <div>
            <Sidebar/>
            <Navbar/>
            <div className='overflow-hidden mt-5 me-3'>
              {/* <CategoryCard result={result}/> */}
              {children}
            </div>
        </div>
    );
};

export default Layout;