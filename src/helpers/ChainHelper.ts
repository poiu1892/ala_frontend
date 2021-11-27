const switchChain = () => {
  return window.ethereum.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x1c" }],
  });
};
const addChain = () => {
  return window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: "0x1c",
        chainName: "Boba Network Rinkeby Testnet",
        rpcUrls: ["https://rinkeby.boba.network/"],
        blockExplorerUrls: ["https://blockexplorer.rinkeby.boba.network/"],
        nativeCurrency: {
          name: "Ether",
          symbol: "ETH",
          decimals: 18,
        },
      },
    ],
  });
};
export const swithNetwork = async () => {
  if (window.ethereum) {
    try {
      await switchChain();
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await addChain();
          await switchChain();
        } catch (addError) {
          console.log(error);
        }
      }
      console.log(error);
    }
  }
};