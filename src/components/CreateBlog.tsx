import useInsertBlog from "../hooks/useInsertBlog"

export default function CreateBlog({ onClose }: { onClose: () => void }) {

    const { title,
        setTitle,
        description,
        setDescription,
        error,
        insertBlog,
        isLoading
    } = useInsertBlog();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await insertBlog();
    }

    return (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-screen backdrop-blur-sm bg-white/10 z-10">
            <div className="top-[10%] rounded-md p-6 w-[30rem] max-w-[90%] z-20 bg-slate-500">
                <h2 className="text-center text-2xl pb-4">Create Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col pb-4">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter blog title..."
                            className="px-3 py-2 rounded-md text-slate-800"
                        />
                    </div>
                    <div className="flex flex-col pb-4">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter blog description..." 
                            className="px-3 py-2 rounded-md text-slate-800"
                        />
                    </div>
                    {error && <p className=" text-red-500">{error}</p>}
                    <div className="flex justify-center gap-10">
                        <button type="button" onClick={onClose} className="bg-slate-600 px-4 py-2 rounded-md">Cancel</button>
                        <button type="submit" className="bg-slate-800 rounded-md px-4 py-2">{isLoading ? 'Loading...': 'Submit Blog'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
