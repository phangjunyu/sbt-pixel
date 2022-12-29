async function onClick(){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    alert(`${account} connected!`)
    console.log(account);
}
 