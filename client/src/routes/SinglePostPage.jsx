import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import SearchPage from "../components/SearchPage";
import Comments from "../components/Comments"
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/*details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className="flex text-gray-400 items-center gap-2 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800 font-semibold">John Joe</Link>
            <span>on</span>
            <Link className="text-blue-800 font-semibold">Web Design</Link>
            <span>2 days ago.</span>
          </div>
          <p className="font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            facilis nemo non atque distinctio rerum officia? Aliquam corporis
            eos aut, doloribus ex iste magnam dicta cumque laborum ut quos!
            Recusandae!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-3xl" />
        </div>
      </div>
      {/*contents */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="gap-6 flex flex-col lg:text-lg text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            repellat quidem accusamus adipisci perferendis autem dicta placeat
            impedit! Ipsam eius corporis tenetur, doloremque vel necessitatibus
            eligendi maiores ut eveniet quos.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            unde dolorem itaque vitae magnam! Minima laborum exercitationem a
            maiores beatae autem distinctio, et sed pariatur modi possimus qui
            maxime officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            officiis fuga cumque rerum vel! Corporis praesentium incidunt
            asperiores voluptas, odio consectetur? Quidem nostrum repellat atque
            sint? Cumque nemo veritatis recusandae.
          </p>
        </div>
        {/* menu */}
        <div className="h-max sticky px-4 top-8">
        <div className="flex flex-col gap-4">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex gap-8 items-center">
            {/* image */}
            <Image
              src="logo.jpg"
              className="w-16 h-16 rounded-full object-cover"
              w="50"
              h="50"
            />
            {/* username */}
            <Link>John</Link>
            </div>
          
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae, impedit omnis provident itaque delectus officiis
              quaerat laborum doloremque rem pariatur? Sint reprehenderit
              doloribus quae laudantium dolore, vero dolores in non.
            </p>
           
            <div className="gap-2 flex">
               
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
            </div>
            {/*  */}
             
            <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/posts" className="underline ">
              All posts
            </Link>
            <Link to="/posts?cat=web-design" className="underline ">
              Web Design
            </Link>
            <Link to="/posts?cat=productivity" className="underline ">
              Productivity
            </Link>
            <Link to="/posts?cat=books" className="underline">
              Books
            </Link>
            <Link to="/posts?cat=quotes" className="underline ">
              Quotes
            </Link>
            <Link to="/posts?cat=car" className="underline">
              Car
            </Link>
            <Link to="/posts?cat=lifestyle" className="underline ">
              Life Style
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          
          {/* Search */}
          <SearchPage />
    
        


        </div>
        
      </div>
        {/* Comments */}
        <Comments/>
    </div>
  );
};

export default SinglePostPage;
