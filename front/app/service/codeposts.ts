import path from "path";
import { readFile } from 'fs/promises';
import { CodePost } from "../types/types";

export const getPosts = async () => {
    const filePath = path.join(process.cwd(), 'data' , 'codeposts.json');
    return readFile(filePath, 'utf-8')
        .then<CodePost[]>(JSON.parse)
        .then((posts) => posts.sort((a,b) => (a.date > b.date ? -1 : 1 )))
}

export const getCodePosts = async () : Promise<CodePost[]> => {
    const posts = await getPosts();
    return posts.filter((posts) => posts.section === "code");
}

export const filterCodePosts = async (category : string) : Promise<CodePost[]> => {
    const posts = await getPosts();
    return posts.filter((posts) => posts.category.includes(category));
}

export const SearchCodePosts = async (content : string, category : string) : Promise<CodePost[]> => {
    const posts = await getPosts();
    return posts.filter((posts) => posts.category.includes(category) || posts.content.includes(content));   
}