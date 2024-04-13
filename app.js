// // app.js
// document.addEventListener('DOMContentLoaded', async () => {
//     // Check if MetaMask is installed
//     if (window.ethereum) {
//         // Initialize Web3.js
//         window.web3 = new Web3(window.ethereum);
        
//         try {
//             // Request access to the user's MetaMask accounts
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
            
//             // Display connected wallet address
//             const accounts = await web3.eth.getAccounts();
//             document.getElementById('walletInfo').innerText = `Connected Wallet: ${accounts[0]}`;
            
//             // Fetch current ETH to USD conversion rate (example using CoinGecko API)
//             const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
//             const data = await response.json();
//             const ethToUsdRate = data.ethereum.usd;
//             document.getElementById('conversionRate').innerText = `ETH to USD Rate: ${ethToUsdRate}`;
//         } catch (error) {
//             console.error(error);
//             alert('Failed to connect MetaMask wallet or fetch conversion rate.');
//         }
//     } else {
//         alert('MetaMask extension not detected. Please install MetaMask to use this feature.');
//     }
// });


// document.addEventListener('DOMContentLoaded', async () => {
//     // Check if MetaMask is installed
//     if (window.ethereum) {
//         // Initialize Web3.js
//         window.web3 = new Web3(window.ethereum);
        
//         try {
//             // Request access to the user's MetaMask accounts
//             await window.ethereum.request({ method: 'eth_requestAccounts' });
            
//             // Display connected wallet address
//             const accounts = await web3.eth.getAccounts();
//             document.getElementById('walletInfo').innerText = `Connected Wallet: ${accounts[0]}`;
            
//             // Fetch current ETH to USD conversion rate (example using CoinGecko API)
//             const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
//             const data = await response.json();
//             const ethToUsdRate = data.ethereum.usd;
//             document.getElementById('conversionRate').innerText = `ETH to USD Rate: ${ethToUsdRate}`;
            
//             // Display popup message
//             alert('MetaMask wallet connected successfully!');
//         } catch (error) {
//             console.error(error);
//             alert('Failed to connect MetaMask wallet or fetch conversion rate.');
//         }
//     } else {
//         alert('MetaMask extension not detected. Please install MetaMask to use this feature.');
//     }
// });


document.addEventListener('DOMContentLoaded', async () => {
    // Check if MetaMask is installed
    if (window.ethereum) {
        // Initialize Web3.js
        window.web3 = new Web3(window.ethereum);
        
        try {
            // Request access to the user's MetaMask accounts
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Display connected wallet address
            document.getElementById('walletInfo').innerText = `Connected Wallet: ${accounts[0]}`;
            
            // Fetch current ETH to USD conversion rate (example using CoinGecko API)
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
            const data = await response.json();
            const ethToUsdRate = data.ethereum.usd;
            document.getElementById('conversionRate').innerText = `ETH to USD Rate: ${ethToUsdRate}`;
            
            // Display popup message
            alert('MetaMask wallet connected successfully!');
        } catch (error) {
            console.error(error);
            alert('Failed to connect MetaMask wallet or fetch conversion rate.');
        }
    } else {
        alert('MetaMask extension not detected. Please install MetaMask to use this feature.');
    }
});
