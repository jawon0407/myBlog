import path from "path";
import { readFile } from 'fs/promises';
import { HobbyPost } from "../types/types";

export const getHobbyPosts = async () => {
    const filePath = path.join(process.cwd(), 'data' , 'hobbyposts.json');
    return readFile(filePath, 'utf-8')
        .then<HobbyPost[]>(JSON.parse)
}
