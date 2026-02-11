import "./header.css"
import { PhoneIcon } from "@heroicons/react/20/solid"

export default function Header() {
    return (
        // REMOVED "fixed" class. 
        // We keep "z-50" to ensure it stays on top of other content.
        <header className="Header container mx-auto z-50 h-12 flex justify-center items-center gap-4 shadow-xl before:backdrop-blur-xl before:opacity-90">
            <div>
                <p className="text-white md:text-xl font-bold">Free Consultation</p>
            </div>
            <div className="bg-orange-100 p-1 rounded-3xl flex justify-center items-center animate-pulse">
                <a href="tel:+910000000000" className="flex gap-1 font-semibold">
                    <PhoneIcon className="text-orange-400 h-6 w-6" />
                    Call Now
                </a>
            </div>
        </header>
    )
}