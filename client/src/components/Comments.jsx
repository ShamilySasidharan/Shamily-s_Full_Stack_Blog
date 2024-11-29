
import Comment from "../components/Comment"
const Comments = ()=>{
    return (
        <div className="flex flex-col gap-8 lg:w-3/5">
            <h1 className="text-xl text-gray-600 underline">Comments</h1>
            <div className="flex items-center justify-between gap-4 w-full">
                <textarea id="" placeholder="Write your comments here..." className="w-full rounded-xl p-4"/>
                <button className="bg-blue-500 text-white rounded-xl py-4  px-2 font-medium">Send</button>
            </div>

            {/* comment */}
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
            
        </div>
    )
}
export default Comments