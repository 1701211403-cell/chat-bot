import Chatlist from "./_components/chatlist"
import Chatbox from "./_components/chatbox"
export default function Home(){
    return(
        <div className="w-screen h-screen flex flex-row">
            <div className="w-60 flex-shrink-0 bg-gray-200">
                <Chatlist />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Chatbox />
            </div>
        </div>
    )
}