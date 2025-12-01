import { UIMessage } from "ai";
export default function ({messages}:{messages:UIMessage[]}){
    return(
        <div>
            {messages.map((message:UIMessage,idx:number)=>{
                const isUser= message.role==='user';
                return(
                    <div className={`chat ${isUser?'chat-end':'chat-start'}`}key ={idx}>
                    <div className={`chat-bubble ${isUser?'':'bg-gray-300 text-balck'}`}>
                        {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
                        </div>
                    </div>
                )
            })}
        </div>
      )
}
