import { useSelector } from "react-redux"
import { Link } from "react-router-dom"; 
import home from "../assets/home.png"
import notifications from "../assets/notification.png"

export const Header = () => {
    const { profileURL } = useSelector((state) => state.auth.data);
    return (
        <header>
            <div className="flex shadow-lg h-auto w-screen bg-gray-300 justify-center">
                <h1 className="py-4	pl-4 text-4xl font-bold tracking-wide leading-snug text-gray-700 align-middle subpixel-antialiased">FARMBOOK</h1>
                <div className="flex gap-8 mr-8 items-center cursor-pointer">
                    <Link to='/'><img className="h-7" alt="home" src={home} /></Link>
                    <Link to='/notifications'><img className="h-7" alt="notifiactions" src={notifications} /></Link>
                    <Link to='/profile'><img className="h-7" alt="profile" src={profileURL} /></Link>
                </div> 
            </div>
        </header>
    )
}
