/* eslint-disable jsx-a11y/alt-text */
import CustomModal from '@components/CustomModal';
import {ClickAwayListener, Tooltip} from '@mui/material';
import copyToClipboard from '@utils/copyToClipboard';
import textMiddleEllipsis from '@utils/textMiddleEllipsis';

import {useEffect, useState} from 'react';

import {ArrowRight2, Copy} from 'iconsax-react';
import {
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from 'wagmi';

const Navbar = ({title, isOpenSidebar, setIsOpenSidebar}) => {
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);
  const [isOpenModalConnectWallet, setIsOpenModalConnectWallet] = useState(false);
  const [isOpenModalWrongNetwork, setIsOpenModalWrongNetwork] = useState(false);
  const [isOpenModalSelectNetwork, setIsOpenModalSelectNetwork] = useState(false);
  const [copy, setCopy] = useState<boolean>(false);
  const {connect, connectors} = useConnect();
  const {disconnect} = useDisconnect();
  const {address} = useAccount();
  const balance = useBalance({
    addressOrName: address,
    token: process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS,
  });
  const {chain} = useNetwork();
  const {
    chains,
    isLoading: isLoadingSwitchNetwork,
    pendingChainId,
    switchNetwork,
  } = useSwitchNetwork();

  useEffect(() => {
    if (address) setIsOpenModalConnectWallet(false);
  }, [address]);

  useEffect(() => {
    if (chain && chain.name === 'Ethereum') setIsOpenModalSelectNetwork(false);
  }, [chain]);

  const handleTooltipClose = () => {
    setCopy(false);
  };

  const handleTooltipOpen = () => {
    setCopy(true);
  };

  return (
    <div
      className={`px-2 desktop:px-10 py-5 flex justify-between items-center fixed desktop:w-[calc(100%-112px)] w-full bg-[#FFF] z-[999] top-0 right-0 drop-shadow transition-all ease-in-out`}
    >
      <div className="desktop:block hidden">
        <div className="text-[32px] text-[#101828] font-semibold capitalize whitespace-nowrap">
          {title}
        </div>
      </div>
      {address ? (
        <div className="flex desktop:justify-end justify-between items-center w-full gap-2 tablet:gap-4">
          <div className="flex items-center gap-2 tablet:gap-4">
            {chain && chain.name === 'Ethereum' ? (
              <div className="p-[3px] tablet:p-[12px] rounded-[25px] border border-[#E7ECEF]">
                <div className="w-full flex items-center gap-2">
                  <img src="/icon/usdc.svg" />
                  <div className="text-[12px] tablet:text-[16px]">
                    {balance?.data
                      ? balance?.data?.formatted + ' ' + balance?.data?.symbol
                      : 'Loading...'}
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="px-[15px] tablet:px-[30px] py-[9px] tablet:py-[12px] rounded-[25px] bg-[#FF6262]"
                onClick={() => setIsOpenModalWrongNetwork(!isOpenModalWrongNetwork)}
              >
                <div className="w-full flex items-center gap-2">
                  <div className="text-[12px] tablet:text-[16px] text-white font-medium">
                    Switch Network
                  </div>
                </div>
              </button>
            )}

            <button
              className="bg-[#F5F5F7] flex items-center gap-2 pl-[20px] rounded-[25px] py-0 pr-0"
              onClick={() => setIsOpenModalProfile(!isOpenModalProfile)}
            >
              <div className="text-[12px] tablet:text-[16px] font-medium">
                {address ? textMiddleEllipsis({text: address}) : 'Loading ...'}
              </div>
              <div className="w-[35px] h-[35px] tablet:w-[50px] tablet:h-[50px] bg-[#406AFF] rounded-[25px]">
                <img src="/icon/user.svg" />
              </div>
            </button>
          </div>
        </div>
      ) : (
        <button
          className=" p-[12px] rounded-[4px] bg-[#436CFF]"
          onClick={() => setIsOpenModalConnectWallet(!isOpenModalConnectWallet)}
        >
          <div className="w-full flex items-center gap-2">
            <img src="/icon/wallet.svg" />
            <div className="text-[16px] text-white">Connect Wallet</div>
          </div>
        </button>
      )}
      <button
        className={`bg-[#3A67DE] border-0 rounded-full h-[35px] w-[35px] tablet:h-[50px] tablet:w-[50px] desktop:hidden ${
          isOpenSidebar ? 'hidden' : 'block'
        }`}
        onClick={() => {
          if (!setIsOpenSidebar) {
            setTimeout(() => {
              setIsOpenSidebar(!isOpenSidebar);
            }, 200);
          } else {
            setIsOpenSidebar(!isOpenSidebar);
          }
        }}
      >
        <img
          src={`${isOpenSidebar ? '/close-icon.svg' : '/hamburger-icon.svg'}`}
          className="w-[18px] mx-auto"
          alt="logo"
        />
      </button>

      {/* MODAL CONNECT WALLET */}
      <CustomModal
        isOpen={isOpenModalConnectWallet}
        title={'Connect your wallet'}
        type={'small'}
        onClose={() => setIsOpenModalConnectWallet(!isOpenModalConnectWallet)}
      >
        <div className="text-[#8F98AA] text-[14px] mt-2 mb-6">Choose your preferred wallet</div>
        {connectors.map(connector => (
          <button
            key={connector.id}
            className="w-full flex jusitfy-end items-center bg-[#F7F7F7] p-3"
            onClick={() => connect({connector})}
          >
            <div className="w-full flex gap-[22px]">
              <img src="/icon/metamask.svg" />
              <div className="font-bold text-base">Metamask</div>
            </div>
            <div>
              <ArrowRight2 size="16" color="#8F98AA" />
            </div>
          </button>
        ))}
      </CustomModal>

      {/* MODAL WRONG NETWORK */}
      <CustomModal
        isOpen={isOpenModalWrongNetwork}
        title={'Wrong Network'}
        type={'small'}
        onClose={() => setIsOpenModalWrongNetwork(!isOpenModalWrongNetwork)}
      >
        <div className="text-[#131736] text-[14px] my-6">
          Connect your Wallet to <span className="font-bold">Ethereum Mainnet</span> to use this
          app, currently you are connected to{' '}
          <span className="font-bold">{chain ? chain.name : ''}</span>
        </div>
        <button
          className="p-[12px] rounded-[4px] bg-[#436CFF] w-full"
          onClick={() => {
            setIsOpenModalWrongNetwork(!isOpenModalWrongNetwork);
            setIsOpenModalSelectNetwork(!isOpenModalSelectNetwork);
          }}
        >
          <div className="text-[14px] text-white">Switch to Ethereum Mainnet</div>
        </button>
      </CustomModal>

      {/* MODAL SELECT NETWORK */}
      <CustomModal
        isOpen={isOpenModalSelectNetwork}
        title={'Connect your wallet'}
        type={'small'}
        onClose={() => setIsOpenModalSelectNetwork(!isOpenModalSelectNetwork)}
      >
        <div className="text-[#8F98AA] text-[14px] mt-2 mb-6">Choose your available network</div>
        {chains.map(x =>
          x.name === 'Ethereum' ? (
            <button
              disabled={!switchNetwork || x.id === chain?.id}
              key={x.id}
              onClick={() => switchNetwork?.(x.id)}
              className="w-full flex jusitfy-end items-center bg-[#F7F7F7] p-3"
            >
              <div className="w-full flex gap-[22px]">
                <img src="/icon/ethereum.svg" />
                <div className="font-bold text-base">
                  {x.name}
                  {isLoadingSwitchNetwork && pendingChainId === x.id && ' (switching)'}
                </div>
              </div>
              <div>
                <ArrowRight2 size="16" color="#8F98AA" />
              </div>
            </button>
          ) : null,
        )}
      </CustomModal>

      <CustomModal
        isOpen={isOpenModalProfile}
        title={'Connected Wallet'}
        type={'small'}
        onClose={() => setIsOpenModalProfile(!isOpenModalProfile)}
      >
        <div className="text-[#8F98AA] text-[14px] mb-8">Choose your preferred wallet</div>
        <div className="bg-[#F7F7F7] flex justify-between items-center py-[8px] px-[12px] rounded-[4px] mb-8">
          <div className="flex gap-[22px]">
            <img src="/icon/metamask.svg" />
            <div>{textMiddleEllipsis({text: address})}</div>
          </div>
          <div className="flex items-center">
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onOpen={handleTooltipOpen}
                open={copy}
                onClose={handleTooltipClose}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Copied!"
                leaveDelay={200}
              >
                <button
                  onClick={async () => {
                    await copyToClipboard({text: address});
                    handleTooltipOpen();
                  }}
                >
                  <Copy size="16" color="#8F98AA" />
                </button>
              </Tooltip>
            </ClickAwayListener>
          </div>
        </div>
        <button
          className="w-full p-3 text-center text-[14px] text-white bg-[#436CFF] rounded-[4px]"
          onClick={() => {
            disconnect();
            setIsOpenModalProfile(false);
          }}
        >
          Disconnect
        </button>
      </CustomModal>
    </div>
  );
};

export default Navbar;
