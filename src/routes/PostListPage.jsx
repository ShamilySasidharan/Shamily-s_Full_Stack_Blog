import PostListItems from "../components/PostListItems";
import SideMenu from "../components/SideMenu";

const PostListPage = ()=>{
    return (
        <div className="">
         <h1 className="mb-8 text-2xl">Devlopment Blog</h1>
         <div className="flex gap-8">
            <div>
              <PostListItems/>
            </div>
            <div className="">
              <SideMenu/>
            </div>
         </div>
        </div>
    )
}

export default PostListPage;