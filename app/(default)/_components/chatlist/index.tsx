import Header from "./Header";
import Conversion from "./Conversion";
import Footer from "./Footer";
export default function Home(){
    return(
        <div className="h-full flex flex-col">
            
            <Header />
            
            <div className="flex-1 overflow-y-auto">
                <Conversion />
            </div>
            <div className="p-4 border-t border-gray-300">
                <Footer />
            </div>
        </div>
    )
}