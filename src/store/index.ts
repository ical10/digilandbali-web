import create from 'zustand';

interface Web3State {
  currentWallet: string;
  updateWallet: (by: string) => void;
  mintedTxHash: string;
  updateMintedTxHash: (by: string) => void;
}

const useWeb3Store = create<Web3State>()(set => ({
  currentWallet: '',
  updateWallet: newWallet =>
    set(() => ({
      currentWallet: newWallet,
    })),
  mintedTxHash: '',
  updateMintedTxHash: newTx =>
    set(() => ({
      mintedTxHash: newTx,
    })),
}));

export default useWeb3Store;
