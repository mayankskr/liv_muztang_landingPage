import Header from "../components/header/Header"
import Hero from "../components/Hero"
export default function Home(){
    return(
        <div className="relative">
            <img src="src\assets\Background.jpg" alt="" className="absolute w-screen h-screen object-cover" />
            <Header></Header>
            <Hero></Hero>

        </div>
    )
}