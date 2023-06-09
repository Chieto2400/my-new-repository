import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="eeeb8d3f-e546-463b-9eb8-9c6ff15fb5bc"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => < ChatFeed {...chatAppProps} />} 
        />
    );
}

export default App;