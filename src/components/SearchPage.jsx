import { IoSearch } from "react-icons/io5";
const SearchPage = ()=>{
    return (
        <div className="flex relative justify-between items-center ">
        <IoSearch size={20} className="absolute left-2 "/>
        <input placeholder="Search a post" className="bg-blue-800 text-white outline-none rounded-full py-2 text-center"/>
         
          
        </div>
    )
}

export default SearchPage