import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItems = ()=>{
    return(
        <div className="mb-8 w-full  items-center justify-between">
          {/* 1 */}
          <div className="flex flex-col lg:flex-row xl:flex-row">
            {/* images */}
          <div className="md:hidden lg:block mt-4 mb-3 px-2">
            <Image src="postImg.jpeg" alt="postItems" className="rounded-3xl aspect-video" w="768"/>
          </div>
          {/* titles and span */}
          <div className="w-full ">
             {/* title */}
             <div className="lg:text-base xl:text-xl  text-lg font-semibold py-4 px-2 ">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat molestiae quaerat obcaecati fugit ullam ad iure. Doloribus debitis natus obcaecati eius dolorum molestias quibusdam itaque, amet nam quam illum.</h1>
          </div>
             {/* span items */}
             <div className="flex gap-4 px-2 flex-wrap w-3/4 ">
          <span className="text-gray-700 font-medium">Written by</span>
          <h1 className="text-blue-800 font-semibold">John Doe</h1>
          <span className="text-gray-700 font-medium">on</span>
          <Link to="/test" className="text-blue-800 font-semibold">Web design </Link>
          <span className="text-gray-700 font-medium">2 days ago</span>
          </div>
           {/* description */}
           <div>
          <p className="p-2 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nostrum voluptate iste! Illo modi illum consectetur aperiam incidunt, maiores nam minima, ratione corrupti aut nihil, dicta dolor numquam repellat perferendis.</p>
          </div>
           {/* read more  */}
           <Link to="/test" className="p-2 text-blue-800 sfont-semibold">Read More</Link>
          </div>
          </div>
          
          {/* 2nd */}
          <div className="flex flex-col lg:flex-row xl:flex-row">
              {/* images */}
            <div className="md:hidden lg:block mt-4 mb-3 px-2 ">
              <Image src="postImg.jpeg" alt="postItems" className="rounded-3xl aspect-video" w="768"/>
            </div>
            {/* titles and span */}
            <div className="w-full ">
              {/* title */}
              <div className="lg:text-base xl:text-xl  text-lg font-semibold py-4 px-2 ">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat molestiae quaerat obcaecati fugit ullam ad iure. Doloribus debitis natus obcaecati eius dolorum molestias quibusdam itaque, amet nam quam illum.</h1>
            </div>
              {/* span items */}
              <div className="flex gap-4 px-2 flex-wrap w-3/4 ">
            <span className="text-gray-700 font-medium">Written by</span>
            <h1 className="text-blue-800 font-semibold">John Doe</h1>
            <span className="text-gray-700 font-medium">on</span>
            <Link to="/test" className="text-blue-800 font-semibold">Web design </Link>
            <span className="text-gray-700 font-medium">2 days ago</span>
            </div>
            {/* description */}
            <div>
            <p className="p-2 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nostrum voluptate iste! Illo modi illum consectetur aperiam incidunt, maiores nam minima, ratione corrupti aut nihil, dicta dolor numquam repellat perferendis.</p>
            </div>
            {/* read more  */}
            <Link to="/test" className="p-2 text-blue-800 sfont-semibold">Read More</Link>
            </div>
              
          
            
          </div>
          
          {/* 3rd */}
            <div className="flex flex-col lg:flex-row xl:flex-row">
                {/* images */}
              <div className="md:hidden lg:block mt-4 mb-3 px-2">
                <Image src="postImg.jpeg" alt="postItems" className="rounded-3xl aspect-video" w="768"/>
              </div>
              {/* titles and span */}
              <div className="w-full ">
                {/* title */}
                <div className="lg:text-base xl:text-xl  text-lg font-semibold py-4 px-2 ">
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat molestiae quaerat obcaecati fugit ullam ad iure. Doloribus debitis natus obcaecati eius dolorum molestias quibusdam itaque, amet nam quam illum.</h1>
              </div>
                {/* span items */}
                <div className="flex gap-4 px-2 flex-wrap w-3/4 ">
              <span className="text-gray-700 font-medium">Written by</span>
              <h1 className="text-blue-800 font-semibold">John Doe</h1>
              <span className="text-gray-700 font-medium">on</span>
              <Link to="/test" className="text-blue-800 font-semibold">Web design </Link>
              <span className="text-gray-700 font-medium">2 days ago</span>
              </div>
              {/* description */}
              <div>
              <p className="p-2 lg:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nostrum voluptate iste! Illo modi illum consectetur aperiam incidunt, maiores nam minima, ratione corrupti aut nihil, dicta dolor numquam repellat perferendis.</p>
              </div>
              {/* read more  */}
              <Link to="/test" className="p-2 text-blue-800 sfont-semibold">Read More</Link>
              </div>
            </div>
         
        </div>
    )
}

export default PostListItems