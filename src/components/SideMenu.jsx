import { Link } from "react-router-dom"
import SearchPage from "./SearchPage"

const SideMenu = ()=>{
    return (
        <div className="h-max sticky top-8">
            {/* search options */}
            <h1 className="mb-4 text-md font-medium ">Search</h1>
            <SearchPage/>

            <h1 className="mb-4 text-md font-medium mt-8 ">Filter</h1>
            {/* filter options */}
            <div className="flex flex-col gap-2 text-sm">
                 <label htmlFor="" className=" flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="sort" value="newest" className="appearance-none w-4 h-4 rounded-sm checked:bg-blue-600 cursor-pointer border-blue-800 border-[1.5px] bg-white"/>
                    Newest
                    </label>
                 <label htmlFor="" className=" flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="sort" value="mostpopular" className=" bg-white appearance-none w-4 h-4 rounded-sm checked:bg-blue-600 cursor-pointer border-blue-800 border-[1.5px]"/>
                    Most Popular
                    </label>
                 <label htmlFor="" className=" flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="sort" value="trending" className="bg-white appearance-none w-4 h-4 rounded-sm checked:bg-blue-600 cursor-pointer border-blue-800 border-[1.5px]"/>
                    Trending 
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="sort" value="oldest" className=" bg-white appearance-none w-4 h-4 rounded-sm checked:bg-blue-600 border-[1.5px] border-blue-800 cursor-pointer"/>
                        Oldest
                    </label>
            </div>

            <h1 className="mb-4 text-md font-medium mt-8 ">Categories</h1>
            {/* categories */}
            <div className="flex flex-col gap-4 text-sm">
                <Link className="underline" to="/posts">All Post</Link>
                <Link className="underLine" to="/posts?cat=web-design">Web Design</Link>
                <Link className="underline" to="/posts?cat=productivity">Productivity</Link>
                <Link className="underline" to="/posts?cat=books">Books</Link>
                <Link className="underline" to="/posts?cat=quotes" >Quotes</Link>
                <Link className="underline" to="/posts?cat=car">Car</Link>
                <Link className="underline" to="/posts?cat=lifestyle">Life Style</Link>
            </div>
        </div>
    )
}
export default SideMenu