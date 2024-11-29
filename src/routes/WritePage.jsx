import { useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";

const WritePage = ()=>{
// CHECKING FOR THE USER
  const {isLoaded,isSignedIn} = useUser()
  if(!isLoaded){
    return <div>Loading</div>
  }
  if(isLoaded && !isSignedIn)
  {
   return <div>You should login in...</div> 
  }

    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] px-6 gap-6 flex flex-col">
           <h1 className="font-light text-lg">Create a new post</h1>
           <form className="flex flex-col gap-6  flex-1 mb-6">
            <button className=" w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white ">Add a cover Image</button>
            <input className="text-4xl font-semibold outline-none text-gray-500 bg-transparent " type="text" placeholder="My story"/>
            <div className="gap-2 flex items-center text-sm">
                <label htmlFor="">Choose a category:</label>
                <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
                    <option value="general">General</option>
                    <option value="web-design">Web Design</option>
                    <option value="productivity">Productivity</option>
                    <option value="books">Books</option>
                    <option value="quotes">Quotes</option>
                    <option value="car">Car</option>
                    <option value="life-style">Life Style</option>
              
                </select>
            </div>
            <textarea name="desc" placeholder="A short description" className="p-4 rounded-xl bg-white shadow-md"/>
          
            {/* editor library */}
            {/* this is one of the famous , we need to install the lastest version but it is not stable for the stable version we can use directly */}
            <ReactQuill theme="snow"   className=" flex-1 p-2 rounded-xl bg-white shadow-md"/>
            <button className="bg-blue-800 text-white font-bold p-4 w-36 rounded-md">Send</button>
           </form>
        </div>
    )
}

export default WritePage;