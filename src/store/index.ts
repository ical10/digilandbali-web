import create from 'zustand';

interface Web3State {
  currentWallet: string;
  updateWallet: (by: string) => void;
}

const useWeb3Store = create<Web3State>()(set => ({
  currentWallet: '',
  updateWallet: newWallet => set(state => ({currentWallet: newWallet})),
}));

export default useWeb3Store;
