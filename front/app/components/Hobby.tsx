import { getHobbyPosts } from "../service/hobbyposts";
import HobbyPost from "./HobbyPost";

const Hobby = async () => {
    const hobbyPost = await getHobbyPosts();
    
    return (
        <div className="my-10 w-4/5">
            <h2 className="text-center text-[44px] font-bold">HOBBY</h2>
            <span className="block text-center my-14 text-[36px] text-gray-200">C.J의 다양한 취미들</span>
            <HobbyPost posts={hobbyPost}/>
        </div>    
    )
}

export default Hobby;