import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPost = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row gap-8">
      {/* featured post */}
      <div className="w-full lg:w-1/2 items-center">
        <Image
          src="featured1.jpeg"
          alt="featuredpost"
          className="rounded-3xl" 
          w="992"

        />
        <div className="flex gap-4 mt-4 items-center">
          <h1 className="text-lg md:text-2xl">01.</h1>
          <Link
            to="/posts"
            className="text-blue-800 text-lg md:text-2xl font-medium cursor-pointer"
          >
            Web Design
          </Link>
          <span className=" text-gray-800 md:text-xl ">2 days ago.</span>
        </div>
        <h1 className="flex-wrap mt-4 text-xl lg:text-2xl xl:3xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          eaque rerum ex dolores aperiam ducimus perspiciatis error omnis
          facilis eveniet aspernatur sit accusantium. Adipisci perferendis,
          dicta doloribus id error ratione.
        </h1>
      </div>

      {/* OTHER POSTS */}
      <div className="w-full lg:w-1/2  gap-4 flex flex-col">
        {/* 2nd post */}
        <div className="lg:h-1/3 gap-4 flex  mt-4">
          {/* image */}
         
         <div className="w-3/6 ">
         <Image
            src="featured2.jpeg"
            className="rounded-2xl md:rounded-lg object-cover aspect-video shadow-md " w="302"
          /></div> 
          {/* details and titles */}
          <div className="w-3/6">
            {/* details */}
            <div className="flex  items-center gap-4 md:gap-2 lg:gap-2 text-sm  md:text-sm mb-2 flex-wrap ">
              <h1 className="text-lg font-semibold">02.</h1>
              <Link to="/test" className="text-blue-800 font-medium">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago.</span>
            </div>

            {/* title */}

            <Link
              className="text-base sm:text-lg md:text-base  xl:text-lg font-medium "
              to="/posts"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/*3rd  */}
        <div className="lg:h-1/3 gap-4 flex  mt-4 ">
          {/* image */}
         
         <div className="w-3/6 ">
         <Image
            src="featured3.jpeg"
            className="rounded-3xl md:rounded-lg object-cover aspect-video  shadow-md " w="302"
          /></div> 
          {/* details and titles */}
          <div className="w-3/6">
            {/* details */}
            <div className="flex  items-center gap-4 md:gap-2 lg:gap-2 text-sm  md:text-sm mb-2 flex-wrap ">
              <h1 className="text-lg font-semibold">02.</h1>
              <Link to="/test" className="text-blue-800 font-medium">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago.</span>
            </div>

            {/* title */}

            <Link
              className="text-base sm:text-lg md:text-base  xl:text-lg font-medium "
              to="/posts"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>

        {/* 4th */}
        <div className="lg:h-1/3 gap-4 flex mt-4">
          {/* image */}
         
         <div className="w-3/6 ">
         <Image
            src="featured4.jpeg"
            className="rounded-3xl md:rounded-lg object-cover aspect-video shadow-md " w="302"
          /></div> 
          {/* details and titles */}
          <div className="w-3/6">
            {/* details */}
            <div className="flex  items-center gap-4 md:gap-2 lg:gap-2 text-sm  md:text-sm mb-2 flex-wrap ">
              <h1 className="text-lg font-semibold">02.</h1>
              <Link to="/test" className="text-blue-800 font-medium">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago.</span>
            </div>

            {/* title */}

            <Link
              className="text-base sm:text-lg md:text-base  xl:text-lg font-medium "
              to="/posts"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
