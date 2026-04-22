import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './components/context/AccountProvider';

function App() {
  const clientID = '72301044744-vhn9th2ir5jh6ht0fc0p414bvlvmfpah.apps.googleusercontent.com' ;
  return (
    <div className="App">
      <>
        <GoogleOAuthProvider clientId={clientID}>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
          
        </GoogleOAuthProvider>
      </>
    </div>
  );
}

export default App;
