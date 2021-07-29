import home from "../assets/home.png"
import notifications from "../assets/notification.png"
// import 

export const Header = () => {
    return (
        <header>
            <div className="shadow-lg h-auto w-screen bg-gray-300">
                <h1 className="py-4	pl-4 text-4xl font-bold tracking-wide leading-snug text-gray-700 align-middle subpixel-antialiased">FARMBOOK</h1>
                <ul>
                    <li><img src={home} /></li>
                    <li><img src={notifications} /></li>
                    <li>Milk</li>
                </ul>
            </div>
        </header>
    )
}