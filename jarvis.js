async function disconnectMetaMask() {
    try {
        if (window.ethereum) {
            await ethereum.request({ method: 'eth_accounts' });
            document.getElementById('walletInfo').innerText = 'Wallet Disconnected';
            // Additional cleanup or actions if needed
            alert('MetaMask wallet disconnected successfully!');
        } else {
            alert('MetaMask extension not detected.');
        }
    } catch (error) {
        console.error(error);
        alert('Failed to disconnect MetaMask wallet.');
    }
}

// Add event listener to disconnect wallet button
document.getElementById('disconnectWalletBtn').addEventListener('click', disconnectMetaMask);
