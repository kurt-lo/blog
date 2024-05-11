import { useState } from "react"
import supabase from "../config/subabaseClient";

export default function useInsertBlog() {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const insertBlog = async () => {
        setIsLoading(true);
        try {
            const { error } = await supabase
                .from('blog')
                .insert({ title, description })

            if (error) {
                setError(error.message);
            } else {
                setTitle('');
                setDescription('');
                console.log('Insert blog successfully!')
            }
        } catch (error) {
            console.error(error)
            setError('An unexpected error occurred');
        } finally {
            setIsLoading(false);
        }
    }

    return {
        title,
        setTitle,
        description,
        setDescription,
        error,
        insertBlog,
        isLoading
    }
}
