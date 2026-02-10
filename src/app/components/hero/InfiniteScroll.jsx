export default function InfiniteScroll(){
    return(
        <div className="container mx-auto  relative overflow-hidden whitespace-nowrap py-2 font-semibold text-black">
            {/* Darker edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#2a1808] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#2a1808] to-transparent z-10" />


            {/* Scrolling content */}
            <div className="bg-white inline-block animate-marquee">
            {Array(8)
            .fill("पुरुषों की पहली पसंद — पावर, जोश और टाइमिंग बढ़ाएं")
            .map((text, i) => (
            <span key={i} className="mx-8">
            {text}
            </span>
            ))}
            </div>


            {/* Animation styles */}
            <style>{`
            @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
            }
            .animate-marquee {
            animation: marquee 50s linear infinite;
            }
            `}</style>
        </div>
    )
}