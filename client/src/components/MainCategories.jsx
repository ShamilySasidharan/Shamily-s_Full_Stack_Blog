import { Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
const MainCatergories = ()=>{
    return (
        <div className="hidden md:flex bg-white rounded-2xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 ">
        {/* links */}
        <div className="flex-1 flex items-center jsutify-between flex-wrap gap-4" >

         <Link to="/posts" className="bg-blue-800 rounded-full text-white py-2 px-4">All posts</Link>
         <Link to="/posts?cat=web-design" className="hover:bg-gray-300 rounded-full  py-2 px-4">Web Design</Link>
         <Link to="/posts?cat=productivity" className="hover:bg-gray-300 rounded-full  py-2 px-4">Productivity</Link>
         <Link to="/posts?cat=books" className="hover:bg-gray-300 rounded-full  py-2 px-4">Books</Link>
         <Link to="/posts?cat=quotes" className="hover:bg-gray-300 rounded-full  py-2 px-4">Quotes</Link>
         <Link to="/posts?cat=car" className="hover:bg-gray-300 rounded-full  py-2 px-4">Car</Link>
         <Link to="/posts?cat=lifestyle" className="hover:bg-gray-300 rounded-full  py-2 px-4">Life Style</Link>
                </div>

        <span className="font-medium md:text-xl  text-6xl">|</span>
        {/* search */}
       
        <div className="flex relative justify-between items-center ">
        <IoSearch size={20} className="absolute left-2 "/>
        <input placeholder="Search a post" className="bg-blue-800 text-white outline-none rounded-full py-2 text-center"/>
         
          
        </div>
        </div>
    )
}

export default MainCatergories