import Navbar from "../components/Navbar";
import BlogPage from "./BlogPage";

export default function Layout() {
    return (
        <div className="flex flex-wrap w-full h-screen text-gray-50">
            <div className="w-2/12 bg-gray-500 p-3 shadow-lg">
                <Navbar />
            </div>
            <div className="w-10/12">
                <div className="p-4 bg-gray-900 h-screen w-full">
                    <BlogPage />
                </div>
            </div>
        </div>
    )
}
