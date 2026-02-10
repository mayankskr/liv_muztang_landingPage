import "./header.css"
import { PhoneIcon } from "@heroicons/react/20/solid"
export default function Header() {
    return (
        // Added 'z-50' to keep it above other content
        <section className="Header container mx-auto sticky top-0 z-50 h-12 flex justify-center items-center gap-4 shadow-xl before:backdrop-blur-xl before:opacity-90">
            <div>
                <p className="text-white text-xs md:text-xl font-bold">Free Consultation</p>
            </div>
            <div className="bg-orange-100 p-2 rounded-3xl flex justify-center items-center animate-pulse">
                <a href="" className="flex gap-1"><PhoneIcon className="text-orange-400 h-6 w-6"></PhoneIcon>Call Now</a>
            </div>
        </section>
    )
}