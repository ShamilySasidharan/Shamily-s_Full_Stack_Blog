import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const PostMenuActions = ()=>{
    return(
        <div>
            <div className="flex items-center gap-2 cursor-pointer">
            <FaSave />
                <span>Save this post </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
            <MdDelete />

                <span>Delete this post</span>

            </div>
        </div>
    )
}

export default PostMenuActions