import InfiniteScroll from "./InfiniteScroll";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// Import assets for better caching and performance
import bottleImg from "../../../assets/2Bottle.webp";
import logoImg from "../../../assets/LIV_MUZTANG.png";
import ProductDescription from "./ProductDescription";

export default function Hero(){
    return (
        <>
            <InfiniteScroll /> 
            <div className="grid md:grid-cols-2 back">
                <div>
                    <img 
                        src={bottleImg}
                        fetchPriority="high"
                        alt="Liv Muztang Bottle Product" 
                        width="400" 
                        height="400"
                        className="z-20 relative max-h-60 md:max-h-120 mx-auto object-contain" 
                    />
                </div>
                <div className="flex flex-col gap-3 text-white backdrop-blur-xl opacity-90 border-2 rounded-4xl py-4 h-fit my-auto text-center mx-1">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">पॉवर, जोश और टाइमिंग बढ़ाएं</h1>
                    <h2 className="font-bold text-md md:text-xl lg:text-2xl">ज़्यादा स्टैमिना, ज़्यादा एनर्जी, ज़्यादा कॉन्फिडेन्स</h2>
                    
                    <div className="bg-linear-to-r from-white to-orange-400 bg-clip-text mx-auto">
                        <img 
                            src={logoImg} 
                            fetchPriority="high" 
                            alt="Liv Muztang Logo"
                            className="max-h-16 md:max-h-24 object-contain"
                        />
                    </div>
                    
                    <p className="text-2xl font-bold">(AFRICAN HERBS)</p>
                    
                    <div className="flex justify-center gap-2 md:text-lg items-center">
                        <p>Rating:</p>
                        <div className="flex items-center text-yellow-400">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                        <p>4.8 Rating By 58040 Users</p>
                    </div>
                    
                    <div className="bg-orange-100 p-2 rounded-3xl mx-auto w-fit animate-pulse">
                        <a href="tel:+910000000000" className="flex gap-1 text-slate-800 font-bold">
                            <PhoneIcon className="text-orange-400 h-6 w-6" />
                            Call Now
                        </a>
                    </div> 
                </div>
            </div>
            <ProductDescription></ProductDescription>
        </>
    );
}