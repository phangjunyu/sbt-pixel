import {Link, AccountConnection} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import { useAsync } from "react-async";

export function AccountConnect() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const accountName = connected ? 'Jane Appleseed' : '';

  const handleAction =  useCallback(async () => {
    if (!connected){
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      if(account!=null){
        setConnected((connected) => (!connected));
        setAccount(account);
      }
    } else {
       setConnected((connected)=>(!connected))
       setAccount("")
    }
    
  }, []);

  const buttonText = connected ? 'Disconnect' : 'Connect';
  const details = connected ? ` ${account} connected` : 'No Wallet Connected';
  const terms = connected ? null : (
    <p>
      <strong>Experimental Feature</strong>
    </p>
  );

  
  return (
    <AccountConnection
      accountName={accountName}
      connected={connected}
      title="Web3 Wallet Connect"
      action={{
        content: buttonText,
        onAction: handleAction,
      }}
      details={details}
      termsOfService={terms}
    />
  );
}