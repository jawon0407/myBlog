import { getStoryLists } from "@/app/service/codeStory";
import { NextResponse } from "next/server";

export const GET = async( request : Request ) => {
    const products = await getStoryLists();
    return NextResponse.json({products});
}
