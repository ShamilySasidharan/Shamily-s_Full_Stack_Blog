import Image from "./Image";
const Comment = ()=>{
    return(
        <div className="p-4 bg-slate-50 rounded-xl mb-8">
          <div className="flex items-center gap-4">
            <Image src="logo.jpg" className="w-10 h-10 rounded-full object-cover" w="40"/>
            <span className="font-medium">John Joe</span>
            <span className="text-sm text-gray-500">2 days ago.</span>
          </div>
          <div className="mt-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic ducimus vitae, quas eos beatae a excepturi blanditiis rerum ratione ipsum dolorum ab fugit harum accusamus repellendus quasi? Obcaecati, distinctio.</p>
          </div>
        </div>
    )
}

export default Comment;