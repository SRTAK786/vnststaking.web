// Contract ABIs and Addresses (REPLACE THESE WITH YOUR ACTUAL VALUES)
const vnstTokenABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressBlacklisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"AddressWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FeeCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"},{"indexed":true,"internalType":"address","name":"by","type":"address"}],"name":"TransferFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"VNSTPriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"vnstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"VNSTPurchased","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BLACKLIST_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"blacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"buyVNST","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"vnstAmount","type":"uint256"}],"name":"getUSDTRequiredForVNST","outputs":[{"internalType":"uint256","name":"usdtRequired","type":"uint256"},{"internalType":"uint256","name":"usdtAllowance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isBlacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"roles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setTransferFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setVNSTPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPriceInUSDT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdrawUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const vnstTokenAddress = "0x37c401DdBC8030c63BF3B3b2816Ba379BfD10474"; // Paste your VNST Token address
const stakingABI = [{"inputs":[{"internalType":"address","name":"_vnstToken","type":"address"},{"internalType":"address","name":"_vntToken","type":"address"},{"internalType":"address","name":"_usdtToken","type":"address"},{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"paused","type":"bool"}],"name":"ContractPaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LevelDepositUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minVNT","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minUSDT","type":"uint256"}],"name":"MinWithdrawAmountsChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"status","type":"bool"}],"name":"MinWithdrawToggled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"vntAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Staked","type":"event"},{"inputs":[],"name":"DAYS_IN_YEAR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkLevel","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"claimRewardsBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"countedAsValidReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"curUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"defaultReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRewardPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getLevelDetails","outputs":[{"internalType":"uint256","name":"currentLevel","type":"uint256"},{"internalType":"uint256[]","name":"levelDeposits","type":"uint256[]"},{"internalType":"bool[]","name":"levelsAchieved","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinWithdrawInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getPendingRewards","outputs":[{"internalType":"uint256","name":"vntRewards","type":"uint256"},{"internalType":"uint256","name":"usdtRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getReferralEarnings","outputs":[{"internalType":"uint256","name":"totalReferralRewards","type":"uint256"},{"internalType":"uint256","name":"totalTeamDeposits","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getStakeHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"startDays","type":"uint256[]"},{"internalType":"bool[]","name":"isActive","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"getTeamUsers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalReferralEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserStakesCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getValidReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWithdrawHistory","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"timestamps","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minUSDTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minVNTWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralCountByLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiOfRoiPercents","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minVNT","type":"uint256"},{"internalType":"uint256","name":"_minUSDT","type":"uint256"}],"name":"setMinWithdrawAmounts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setStakeLimits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vnstPrice","type":"uint256"},{"internalType":"uint256","name":"_vntPrice","type":"uint256"}],"name":"setTokenPrices","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vnstStakingWallet","type":"address"},{"internalType":"address","name":"_vntRewardWallet","type":"address"},{"internalType":"address","name":"_usdtRewardWallet","type":"address"},{"internalType":"address","name":"_vnstAutoStakeWallet","type":"address"},{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setWalletAddresses","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamUsers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_status","type":"bool"}],"name":"toggleMinWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"useMinWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"userLevelDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startDay","type":"uint256"},{"internalType":"uint256","name":"lastClaimDay","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalClaimed","type":"uint256"},{"internalType":"uint256","name":"lastClaimTimestamp","type":"uint256"},{"internalType":"uint256","name":"referralCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"validDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstAutoStakeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstStakingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vnstToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntRewardWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vntToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawHistory","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isCompleted","type":"bool"}],"stateMutability":"view","type":"function"}];
const stakingAddress = "0xA380d42E52668d4Ab2dEB6C9D9Ee93a8E9e3dD10"; // Paste your Staking contract address

// DOM Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletModal = document.getElementById('walletModal');
const closeModal = document.querySelector('.close-modal');
const metamaskBtn = document.getElementById('metamaskBtn');
const walletConnectBtn = document.getElementById('walletConnectBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

// Global Variables
let web3;
let vnstTokenContract;
let stakingContract;
let accounts = [];
let isConnected = false;

// Initialize the application
window.addEventListener('DOMContentLoaded', async () => {
    console.log("Initializing Web3...");
    
    // Initialize Web3
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Check connection
            accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                isConnected = true;
                updateWalletButton();
                initContracts();
                await updateUI();
            }
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', (newAccounts) => {
                accounts = newAccounts;
                isConnected = accounts.length > 0;
                updateWalletButton();
                if (isConnected) updateUI();
            });
            
            // Listen for chain changes
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });

            if (window.location.pathname.includes('team.html')) {
                await loadTeamData();
            }
            
        } catch (error) {
            console.error("Error connecting to wallet:", error);
        }
    } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('Non-Ethereum browser detected. Consider installing MetaMask!');
    }

    if (isConnected) {
        await updateUI();
    }
});
    // Event Listeners
    connectWalletBtn.addEventListener('click', toggleWalletModal);
    closeModal.addEventListener('click', toggleWalletModal);
    metamaskBtn.addEventListener('click', connectMetaMask);
    walletConnectBtn.addEventListener('click', connectWalletConnect);
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Staking Page Specific
    if (window.location.pathname.includes('stake.html')) {
        const approveMaxBtn = document.getElementById('approveMaxBtn');
        const stakeBtn = document.getElementById('stakeBtn');
        const claimTokenBtn = document.getElementById('claimTokenBtn');
        const copyReferralBtn = document.getElementById('copyReferralBtn');

        if (approveMaxBtn) approveMaxBtn.addEventListener('click', approveMax);
        if (stakeBtn) stakeBtn.addEventListener('click', stakeTokens);
        if (claimTokenBtn) claimTokenBtn.addEventListener('click', claimRewards);
        if (copyReferralBtn) copyReferralBtn.addEventListener('click', copyReferralLink);

        setupStakingPage();
    }
    
    // Team Page Specific
    if (window.location.pathname.includes('team.html')) {
        loadTeamData();
    }
    
    animateCardsOnScroll();
});

// Initialize contracts
function initContracts() {
    try {
        if (!web3) {
            console.error("Web3 not initialized");
            return;
        }

        vnstTokenContract = new web3.eth.Contract(vnstTokenABI, vnstTokenAddress);
        stakingContract = new web3.eth.Contract(stakingABI, stakingAddress);
        console.log("Contracts initialized successfully");
    } catch (error) {
        console.error("Error initializing contracts:", error);
    }
}

// Wallet functions
function toggleWalletModal() {
    walletModal.style.display = walletModal.style.display === 'block' ? 'none' : 'block';
}

function toggleMobileMenu() {
    navMenu.classList.toggle('show');
}

async function connectMetaMask() {
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected account:", accounts[0]);
        
        isConnected = true;
        updateWalletButton();
        initContracts();
        await updateUI();
        
        toggleWalletModal();
    } catch (error) {
        console.error("Connection failed:", error);
        alert("Connection failed: " + error.message);
    }
}

async function connectWalletConnect() {
    alert("WalletConnect integration would go here in a full implementation");
    toggleWalletModal();
}

function updateWalletButton() {
    if (isConnected && accounts[0]) {
        const shortAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`;
        connectWalletBtn.textContent = shortAddress;
        connectWalletBtn.classList.add('connected');
    } else {
        connectWalletBtn.textContent = 'Connect Wallet';
        connectWalletBtn.classList.remove('connected');
    }
}

// Staking functions
async function approveMax() {
    if (!isConnected) return alert("Please connect your wallet first");
    
    try {
        const maxAmount = web3.utils.toWei('10000', 'ether');
        const result = await vnstTokenContract.methods.approve(stakingAddress, maxAmount)
            .send({ from: accounts[0] });
        console.log("Approval successful:", result);
        alert("Approval successful! You can now stake VNST tokens.");
    } catch (error) {
        console.error("Approval failed:", error);
        alert("Approval failed: " + error.message);
    }
}

async function stakeTokens() {
    if (!isConnected) return alert("Please connect your wallet first");
    
    const amount = document.getElementById('stakeAmount')?.value;
    if (!amount || amount < 100 || amount > 10000) {
        return alert("Please enter a valid amount between 100 and 10,000 VNST");
    }
    
    try {
        const amountWei = web3.utils.toWei(amount, 'ether');
        const referralAddress = document.getElementById('referralAddress')?.value || accounts[0];
        
        // Check allowance
        const allowance = await vnstTokenContract.methods.allowance(accounts[0], stakingAddress).call();
        if (parseInt(allowance) < parseInt(amountWei)) {
            return alert("Please approve the contract to spend your VNST tokens first");
        }
        
        // Execute stake
        const result = await stakingContract.methods.stake(amountWei, referralAddress)
            .send({ from: accounts[0] });
        console.log("Staking successful:", result);
        alert("Staking successful!");
        await updateUI();
    } catch (error) {
        console.error("Staking failed:", error);
        alert("Staking failed: " + error.message);
    }
}

async function claimRewards() {
    if (!isConnected) return alert("Please connect your wallet first");
    
    try {
        const result = await stakingContract.methods.claimRewards()
            .send({ from: accounts[0] });
        console.log("Rewards claimed:", result);
        alert("Rewards claimed successfully!");
        await updateUI();
    } catch (error) {
        console.error("Claim failed:", error);
        alert("Claim failed: " + error.message);
    }
}

// Team Page Functions
async function loadTeamData() {
    if (!isConnected || !accounts[0] || !stakingContract) {
        console.log("Not connected or contracts not initialized");
        return;
    }
    
    try {
        console.log("Loading team data...");
        
        // Get user level
        const userLevel = await stakingContract.methods.curUserLevel(accounts[0]).call();
        document.getElementById('userLevel').textContent = userLevel;
        
        // Get team counts for each level
        for (let i = 1; i <= 5; i++) {
            try {
                const team = await stakingContract.methods.getTeamUsers(accounts[0], i-1).call();
                document.getElementById(`level${i}Count`).textContent = `${team.length} Members`;
                
                // Check level status
                const levelStatus = await stakingContract.methods.checkLevel(accounts[0], i-1).call();
                document.getElementById(`level${i}Status`).textContent = 
                    levelStatus ? "Unlocked" : "Locked";
                document.getElementById(`level${i}Status`).style.color = 
                    levelStatus ? "#4CAF50" : "#F44336";
                
                // Get level deposits
                const user = await stakingContract.methods.users(accounts[0]).call();
                const levelDeposit = user.levelDeposits[i-1] || "0";
                document.getElementById(`level${i}Stake`).textContent = 
                    `${web3.utils.fromWei(levelDeposit, 'ether')} VNST`;
            } catch (error) {
                console.error(`Error loading level ${i} data:`, error);
            }
        }
        
        // Get total team stats
        const userInfo = await stakingContract.methods.users(accounts[0]).call();
        document.getElementById('totalTeamMembers').textContent = userInfo.referralCount;
        
        const totalTeamStake = await stakingContract.methods.getTotalStaked(accounts[0]).call();
        document.getElementById('totalTeamStake').textContent = 
            `${web3.utils.fromWei(totalTeamStake, 'ether')} VNST`;
        
        // Get direct income
        const directIncome = await calculateDirectIncome();
        document.getElementById('directIncome').textContent = 
            `${web3.utils.fromWei(directIncome, 'ether')} USDT`;
        
        // Get ROI income
        const roiIncome = await calculateROIIncome();
        document.getElementById('roiIncome').textContent = 
            `${web3.utils.fromWei(roiIncome, 'ether')} USDT`;
        
    } catch (error) {
        console.error("Error loading team data:", error);
    }
}

async function calculateROIIncome() {
    // This calculates ROI income based on user's total claimed rewards
    try {
        const userInfo = await stakingContract.methods.users(accounts[0]).call();
        const totalClaimed = userInfo.totalClaimed;
        
        // Assuming ROI is 2% of total claimed (adjust according to your contract)
        const roiIncome = web3.utils.toBN(totalClaimed).mul(web3.utils.toBN(2)).div(web3.utils.toBN(100));
        return roiIncome.toString();
    } catch (error) {
        console.error("Error calculating ROI income:", error);
        return "0";
    }
}

// Staking Page Functions
async function setupStakingPage() {
    if (!isConnected || !accounts[0] || !stakingContract) return;
    
    try {
        // Load stakes
        const stakesCount = await stakingContract.methods.getUserStakesCount(accounts[0]).call();
        const stakesList = document.getElementById('stakesList');
        stakesList.innerHTML = '';
        
        let totalActive = 0;
        if (stakesCount > 0) {
            for (let i = 0; i < stakesCount; i++) {
                const stake = await stakingContract.methods.userStakes(accounts[0], i).call();
                if (stake.isActive) {
                    const stakeAmount = web3.utils.fromWei(stake.amount, 'ether');
                    totalActive += parseFloat(stakeAmount);
                    
                    stakesList.innerHTML += `
                        <div class="stake-item">
                            <p><strong>Stake #${i+1}:</strong> ${stakeAmount} VNST</p>
                            <p>Days staked: ${stake.daysStaked || 0}/365</p>
                        </div>
                    `;
                }
            }
        } else {
            stakesList.innerHTML = '<p>No active stakes found</p>';
        }
        
        document.getElementById('totalActiveStake').textContent = `${totalActive} VNST`;
        
        // Load rewards breakdown
        const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
        if (Array.isArray(rewards)) {
            const vntRewards = web3.utils.fromWei(rewards[0] || '0', 'ether');
            const usdtRewards = web3.utils.fromWei(rewards[1] || '0', 'ether');
            
            document.getElementById('stakingRewards').textContent = `${vntRewards} VNT`;
            document.getElementById('totalPendingRewards').textContent = `${vntRewards} VNT + ${usdtRewards} USDT`;
            
            // Calculate direct and ROI rewards (50-50 split for example)
            const directRewards = (parseFloat(usdtRewards) * 0.5).toFixed(4);
            const roiRewards = (parseFloat(usdtRewards) * 0.5).toFixed(4);
            
            document.getElementById('directRewards').textContent = `${directRewards} USDT`;
            document.getElementById('roiRewards').textContent = `${roiRewards} USDT`;
        }
        
        // Set referral link
        document.getElementById('referralLink').value = 
            `${window.location.origin}/stake.html?ref=${accounts[0]}`;
            
    } catch (error) {
        console.error("Error setting up staking page:", error);
    }
}

// UI functions
async function updateUI() {
    if (!isConnected || !accounts[0]) {
        console.log("UI update skipped - not connected");
        return;
    }

    try {
        console.log("Updating UI...");
        
        // Initialize contracts if not done
        if (!vnstTokenContract || !stakingContract) {
            initContracts();
        }
        
        // Common updates
        updateWalletButton();
        
        // Update wallet balance
        if (document.getElementById('walletBalance')) {
            const balance = await vnstTokenContract.methods.balanceOf(accounts[0]).call();
            document.getElementById('walletBalance').textContent = 
                `${web3.utils.fromWei(balance, 'ether')} VNST`;
        }
        
        // Page-specific updates
        if (window.location.pathname.includes('team.html')) {
            await loadTeamData();
        } 
        else if (window.location.pathname.includes('stake.html')) {
            await setupStakingPage();
        }
        else {
            // Home page updates
            await updateHomePage();
        }
        
    } catch (error) {
        console.error("UI update failed:", error);
    }
}

// Add this new function for home page
async function updateHomePage() {
    try {
        // Get total staked
        const totalStaked = await stakingContract.methods.getTotalStaked(accounts[0]).call();
        if (document.getElementById('totalStaked')) {
            document.getElementById('totalStaked').textContent = 
                `${web3.utils.fromWei(totalStaked, 'ether')} VNST`;
        }
        
        // Get pending rewards
        const rewards = await stakingContract.methods.getPendingRewards(accounts[0]).call();
        if (rewards && document.getElementById('totalRewards')) {
            const vntRewards = web3.utils.fromWei(rewards[0] || '0', 'ether');
            const usdtRewards = web3.utils.fromWei(rewards[1] || '0', 'ether');
            document.getElementById('totalRewards').textContent = 
                `${vntRewards} VNT + ${usdtRewards} USDT`;
        }
        
        // Get referral count
        const userInfo = await stakingContract.methods.users(accounts[0]).call();
        if (document.getElementById('referralCount')) {
            document.getElementById('referralCount').textContent = userInfo.referralCount;
        }
    } catch (error) {
        console.error("Home page update failed:", error);
    }
}

// Utility functions
function copyReferralLink() {
    const referralLinkInput = document.getElementById('referralLink');
    if (!referralLinkInput) return;
    
    referralLinkInput.select();
    document.execCommand('copy');
    alert("Referral link copied to clipboard!");
}

function animateCardsOnScroll() {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}
