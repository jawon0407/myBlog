import { getHobbyPosts } from "../service/hobbyposts";
import HobbyPost from "./HobbyPost";

const Hobby = async () => {
    const hobbyPost = await getHobbyPosts();
    
    return (
        <div className="my-10 w-3/5">
            <h2 className="text-center text-[44px] font-bold">HOBBY</h2>
            <span className="block text-center my-14 text-[36px] text-gray-200">C.J의 다양한 취미들</span>
            <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    hobbyPost.map((post , i) => {
                        return <HobbyPost posts={post} />
                    })
                }
            </ul>
        </div>    
    )
}

export default Hobby;