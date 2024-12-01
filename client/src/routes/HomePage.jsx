import { Link } from "react-router-dom";
import MainCatergories from "../components/MainCategories";
import FeaturedPost from "../components/FeaturedPost";
import PostListItems from "../components/PostListItems"
const HomePage = () => {
  return (
    // contain BREADCRUMS,INTRO,animated btn,CATEGORIES,FEATURED POST,POST LIST
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMS*/}
        <div className="flex gap-4">
            <Link to="/">Home</Link>
            <span>.</span>
            <span className="text-blue-800">Blogs and Articles</span>
        </div>

      {/* INTRO: titles with h1,p then text with animation and arrow btn all in row*/}
        <div className="flex items-center justify-between">
            {/* titles */}
            <div>
                <h1 className="text-gray-800 tex-2xl md:text-5xl lg:text-6xl font-bold">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h1>
                <p className=" mt-4 text-md md:text-xl text-gray-700 s">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                    reiciendis ad unde. Molestias ut maiores porro pariatur, temporibus
                    impedit, nulla dignissimos eaque deleniti quibusdam tempora
                    voluptate non vel unde fugiat?
                </p>
            </div>

            {/* animated btn */}
                <Link to="/write" className="hidden md:block relative">
                    {/* 1.text around the arrow btn */}
                        <svg height="150" width="150" className="text-lg tracking-widest  animate-spin animateText" >
                            <path
                            id="circlePath"
                            d="M 75,75 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            fill="none"
                            />

                            <text fill="black" fontSize="14">
                            <textPath href="#circlePath" startOffset="0%">
                                Create your blog.
                            </textPath>
                            <textPath href="#circlePath" startOffset="50%">
                                Create your blog.
                            </textPath>
                            </text>
                        </svg>

                {/* 2.arrow inside btn */}
                    <button className="bg-blue-800 rounded-full flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 m-auto w-20 h-20">
                            <svg
                            width="50"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            >
                            <line x1="6" y1="18" x2="18" y2="6"/>
                            <polyline points="9 6 18 6 18 15" />
                            </svg>
                    </button>
                </Link>
        </div>
          
    {/* CATEGORIES */}
        <MainCatergories/>

    {/* FEATURED POST */}
         <FeaturedPost/>
 
    {/* POST LIST */}
    <div className="mt-8">
        <h1 className="font-medium text-3xl text-gray-800 px-2">Recent Post</h1>
        <PostListItems/>
    </div>
    </div>
  );
};

export default HomePage;
