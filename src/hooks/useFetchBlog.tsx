import { useEffect, useState } from "react"
import supabase from "../config/subabaseClient";
import { Blog } from "../../utils/types";

export default function useFetchBlog() {

    const [blogData, setBlogData] = useState<Blog[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchBlogData = async () => {
        try {
            const { data, error } = await supabase
                .from('blog')
                .select('*')

            if (error) {
                setError(error.message)
            } else {
                setBlogData(data)
            }
        } catch (error) {
            console.error(error)
            setError('Unexpected Error Occured While Fetching Data')
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, [blogData, error]); // para madisplay and rerender yung mga blogs
    
    return {
        blogData,
        error,
        fetchBlogData
    }
}
