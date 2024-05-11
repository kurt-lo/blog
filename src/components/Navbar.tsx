import { useAppDispatch, useAppSelector } from "../store/hooks"
import { formattedEmailFirstCharacter } from '../../utils/function'
import { MdMonitor } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import supabase from "../config/subabaseClient";
import { setSession } from "../store/auth";
import CreateBlog from "./CreateBlog";
import { useState } from "react";

export default function Navbar() {

    const selector = useAppSelector(state => state.auth.isAuthenticated)
    const dispatch = useAppDispatch()
    
    const handleLogout = async () => {
        await supabase.auth.signOut()
        dispatch(setSession(null)) // para mag rerender yung ui tinawag ko yung setSession sa redux para gawin null or 0 auth user
    }
    
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleOpenModal() {
        setOpenModal(true)
    }
    function handleCloseModal() {
        setOpenModal(false)
    }

    return (
        <nav className="flex flex-col gap-8 mt-4">
            <div className="flex items-center justify-around">
                <span className="bg-black px-5 py-3 rounded-full inline-block">
                    {formattedEmailFirstCharacter(selector?.user.email)}
                </span>
                <div>
                    <p className="text-sm">Welcome,</p>
                    <h2 className="font-semibold text-lg tracking-wide">
                        {selector?.user.email}
                    </h2>
                </div>
            </div>
            <ul className="space-y-2 text-sm">
                <li>
                    <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200">
                        <span className="text-gray-600">
                            <MdMonitor size={22} />
                        </span>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 cursor-pointer"
                    onClick={handleOpenModal}
                >
                    <IoIosCreate size={22} />
                    <span>Post Blog</span>
                </li>
                <li>
                    <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                        onClick={handleLogout}
                    >
                        <span className="text-gray-600">
                            <IoIosLogOut size={22} />
                        </span>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
            {openModal && <CreateBlog onClose={handleCloseModal} />}
        </nav>
    )
}


















// import { User } from "@supabase/supabase-js";

// ganito kapag hindi naka redux, gagamit ng props
// export default function Navbar({ authenticated }: { authenticated: User }) {

//     return (
//         <>
//             {authenticated.email}
//         </>
//     )
// }
