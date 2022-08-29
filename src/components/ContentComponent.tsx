import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import {InjectedConnector} from '@wagmi/core';

import {useState, useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
  MinusCirlce,
  AddCircle,
  TickCircle,
  ExportSquare,
  Building4,
  Copy,
  ArrowSwapHorizontal,
} from 'iconsax-react';
import Cookies from 'js-cookie';
import FAQComponent from 'src/components/FAQComponent';
import SocialHandles from 'src/components/SocialHandles.js';
import useAuthHook from 'src/hooks/use-auth.hooks';
import useFormHook from 'src/hooks/use-form.hooks';
import useMintHook from 'src/hooks/use-mint.hooks.js';
import useStore from 'src/store';
import styles from 'styles/ContentComponent.module.css';
import {useDebounce} from 'use-debounce';
import {useConnect, useAccount} from 'wagmi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#FFFFFF',
  boxShadow: 24,
  borderRadius: '4px',
};

const ContentComponent = () => {
  const {
    mintNFT,
    minting,
    isMintSuccess,
    allowUSDC,
    verifyAllowance,
    allowance,
    fetchBalance,
    balance,
    fetchMintedByUserQty,
    mintedNFT,
    fetchPrice,
    price,
    fetchActiveStage,
    activeStage,
    fetchMaxSupply,
    maxSupply,
    fetchMintedQty,
    mintedQty,
    fetchNFTImage,
    image,
    loading,
  } = useMintHook();

  const {login, isAuthenticated} = useAuthHook();

  const cookieToken = Cookies.get('access_token');

  const {verifyRefCode, isLoading: isLoadingForm} = useFormHook();

  const {address, isConnected, isDisconnected} = useAccount();
  const {connect, connectors, error, isLoading, pendingConnector} = useConnect();

  const [connectClicked, setConnectClicked] = useState(false);

  const currentWallet = useStore(state => state.currentWallet);
  const updateWallet = useStore(state => state.updateWallet);

  if (isDisconnected) {
    Cookies.remove('access_token');
    Cookies.remove('user');
  }

  useEffect(() => {
    verifyAllowance();
    fetchMintedQty();
    fetchPrice();
    fetchActiveStage();
    fetchMaxSupply();
    fetchNFTImage();
    setConnectClicked(false);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      updateWallet(address);
      Cookies.set('user', JSON.stringify(address));
      fetchMintedByUserQty(address);
      fetchBalance(address);

      if (!isAuthenticated) {
        login(address);
      }
    }
  }, [isConnected, address, isAuthenticated]);

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (!token && connectClicked && address) {
      login(address);
    }
  }, [address, connectClicked]);

  useEffect(() => {
    if (isMintSuccess) {
      fetchMintedByUserQty();
    }
  }, [isMintSuccess]);

  const [temp, setTemp] = useState('');
  const [referralCode] = useDebounce(temp, 1000);
  const [codeValidity, setCodeValidity] = useState(false);

  //Prerequisite for refCode
  const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);
  const isValidCode = referralCode.length === 6 && isAlphaNumeric(referralCode);
  const emptyRefCode = referralCode.length === 0;
  const refCodeConfirmed = (codeValidity && referralCode.length === 6) || referralCode.length === 0;

  const disableMint = minting || !refCodeConfirmed;

  useEffect(() => {
    async function check() {
      if (isValidCode && cookieToken) {
        const refCodeValidity = await verifyRefCode(cookieToken, referralCode);

        if (refCodeValidity) {
          setCodeValidity(true);
        }
      } else {
        setCodeValidity(false);
      }
    }

    check();
  }, [isValidCode, referralCode, cookieToken]);

  const [quantity, setQuantity] = useState(0);

  const [isAgreed, setIsAgreed] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const [copy, setCopy] = useState(false);

  const handleTooltipClose = () => {
    setCopy(false);
  };

  const handleTooltipOpen = () => {
    setCopy(true);
  };

  const handleDecrement = () => {
    if (quantity !== 0) {
      const decreasedQuantity = quantity - 1;
      setQuantity(decreasedQuantity);
    }
  };

  const handleIncrement = () => {
    const increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };

  const handleChangeQuantity = e => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeReferralCode = e => {
    setTemp(e.target.value);
  };

  const isUSDCEnough = () => {
    if (balance < quantity * price) return false;
    return true;
  };

  const handleChangeAgreement = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSetAllowance = () => {
    allowUSDC(quantity * price);
  };

  const handleConnectWallet = (connector: InjectedConnector) => {
    connect({connector});
    setConnectClicked(true);
  };

  const handleMintPressed = () => {
    mintNFT(quantity, referralCode);
  };

  const allowedSupply = maxSupply - mintedQty;

  const formDisabled = !isAuthenticated;

  return (
    <div id="content">
      <div className="flex flex-col content-center justify-center tablet:grid tablet:grid-flow-col">
        <div className="flex flex-col items-center p-6 gap-4 text-center bg-[#edf4f7] rounded-t-lg tablet:rounded-tr-none tablet:rounded-l-lg tablet:max-w-max tablet:gap-8 desktop:px-20 desktop:py-14">
          {image ? (
            <img src={image} alt="NFT image illustration" className="w-45 h-45" />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          <div className="flex flex-col gap-4 tablet:gap-4">
            <div>
              <h3 className="font-bold text-xl tablet:text-base">5 DAYS LEFT!</h3>
            </div>
            <div>
              <p className="font-bold">Mint Price</p>
              <p className="font-normal">
                {price ? `1 NFT : ${price.toLocaleString()} USDC` : <Skeleton />}
              </p>
            </div>
            <div>
              <p className="font-bold">
                {activeStage ? `Stage ${activeStage} Supply` : <Skeleton />}
              </p>
              <p className="font-normal">
                {mintedQty}/{maxSupply}
              </p>
            </div>
            <div>
              <p className="font-bold">Total Supply</p>
              <p className="font-normal">1,771</p>
            </div>
            <div>
              <div className="flex flex-row items-center justify-center gap-1">
                <p className="font-bold">Minted</p>
                <IconButton onClick={handleOpenModal}>
                  <ExportSquare size="16" color="#344054" />
                </IconButton>
              </div>
              <p className="font-normal">{mintedNFT ? `${mintedNFT}` : <Skeleton />}</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 tablet:my-auto">
            <SocialHandles />
          </div>
        </div>
        <div className="bg-[#fff] rounded-b-lg p-6 tablet:rounded-bl-none tablet:rounded-r-lg tablet:min-w-fit desktop:px-20 desktop:py-14">
          <div className="flex flex-col gap-2 mb-8 tablet:mb-12">
            <h1 className="font-bold text-2xl uppercase desktop:text-3xl">
              {activeStage ? (
                `Stage 0${activeStage}: Physical Land
`
              ) : (
                <Skeleton />
              )}
            </h1>
            <h3 className="font-semibold text-lg uppercase desktop:text-2xl">
              lima beach signature nft
            </h3>
          </div>

          {/*FORMS*/}
          <div className="flex flex-col gap-4 mb-8 tablet:mb-28">
            <TextField
              className="rounded-lg border border-[#d0d5dd] p-2 shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              name="referral-code"
              id="referral-code"
              variant="outlined"
              placeholder="Input Referral Code (Optional)"
              label="Referral Code"
              defaultValue={''}
              onChange={handleChangeReferralCode}
              disabled={formDisabled}
            />
            {isLoadingForm ? <p>Checking...</p> : <></>}
            {isValidCode || emptyRefCode ? (
              <></>
            ) : (
              <p className="text-[#ff4b7b]">Invalid Referral code, code has been removed </p>
            )}
            {codeValidity ? <p className="text-[#76ce8a]">Referral Code Added!</p> : <></>}
            <div className={styles.container}>
              <div className="flex py-1 px-2 rounded-lg border border-[#d0d5dd] justify-around">
                <div>
                  <IconButton
                    disabled={allowedSupply === 0 || formDisabled}
                    onClick={handleDecrement}
                  >
                    <MinusCirlce size="20" color="#8f98aa" />
                  </IconButton>
                </div>
                <input
                  type="number"
                  name="input-mint-quantity"
                  className={styles.inputQuantity}
                  value={quantity}
                  disabled={formDisabled}
                  onChange={handleChangeQuantity}
                ></input>
                <div>
                  <IconButton
                    disabled={
                      !(quantity * price < balance) || quantity >= allowedSupply || formDisabled
                    }
                    onClick={handleIncrement}
                  >
                    <AddCircle
                      size="20"
                      color={!(quantity * price < balance) ? '#808080' : '#8f98aa'}
                    />
                  </IconButton>
                </div>
              </div>
              <ArrowSwapHorizontal size="16" color="#8F98AA" />
              <div className="flex items-center justify-center py-2 px-4">
                <h4 className="font-bold text-sm whitespace-nowrap">
                  {(price * quantity).toLocaleString()} USDC
                </h4>
              </div>
            </div>
            <p className="font-normal text-lg text-[#ff4b7b]">
              {quantity > 0 && quantity >= allowedSupply ? `Max supply reached` : ''}
              {allowedSupply === 0 ? `Sold out!` : ''}
            </p>
            <div>
              Allowed USDC to trade
              <div className="border border-[EDF4F7] rounded flex justify-end items-center py-2 px-3">
                <TickCircle
                  size="16"
                  color={allowance > 0 && allowance === quantity * price ? '#76CE8A' : '#808080'}
                />
                <div className="ml-2">{(quantity * price).toLocaleString()}</div>
                <button
                  disabled={
                    loading ||
                    quantity * price > balance ||
                    quantity * price === allowance ||
                    quantity > allowedSupply ||
                    formDisabled
                  }
                  onClick={handleSetAllowance}
                  className="ml-auto disabled:bg-transparent bg-transparent shadow-none rounded-none py-[8px] px-[14px] font-medium text-xs text-[#406AFF]"
                >
                  {quantity > 0 ? 'Set New Allowance' : ''}
                </button>
              </div>
              {allowance > 0 ? (
                <p className="mt-1 text-[#76CE8A]">
                  {allowance ? (
                    `Congratulations ! Now you can trade your ${allowance} USDC`
                  ) : (
                    <Skeleton />
                  )}
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-row gap-1">
              <input
                type="checkbox"
                id="tnc"
                name="tnc"
                onChange={handleChangeAgreement}
                disabled={formDisabled}
              />
              <label htmlFor="tos">
                I agree with{' '}
                <a href="https://google.com" style={{color: '#406aff'}}>
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="font-normal text-lg text-[#ff4b7b]">
              {isUSDCEnough() ? '' : 'Insufficient balance'}
            </div>
          </div>

          <div className="flex flex-col gap-4 desktop:grid desktop:grid-cols-[1fr_1fr]">
            {isConnected ? (
              <button
                className="w-full bg-[#406aff] py-[8px] px-[14px]"
                onClick={() => handleMintPressed()}
                disabled={
                  !(
                    allowedSupply > 0 &&
                    quantity > 0 &&
                    isAgreed &&
                    allowance === quantity * price
                  ) || disableMint
                    ? true
                    : false
                }
              >
                <span>Mint Now</span>
              </button>
            ) : (
              <>
                {connectors.map((connector: InjectedConnector) => (
                  <button
                    className="w-full"
                    disabled={!connector.ready || isLoading}
                    key={connector.id}
                    onClick={() => handleConnectWallet(connector)}
                  >
                    <span>
                      {`Connect ${connector.name}`}
                      {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
                    </span>
                  </button>
                ))}

                {error && <div>{error.message}</div>}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mt-32">
        <FAQComponent />
      </div>
      <div className="relative w-full h-[120px] my-12 tablet:my-32">
        <img src="/Union.svg" className="w-full h-full relative" alt="tes" />
      </div>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="Minted NFT Modal"
        aria-describedby="Description of your Minted NFT"
      >
        <Box sx={style}>
          <div className="max-w-[310px] tablet:max-w-[540px]">
            <IconButton
              className="absolute shadow-none hover:bg-transparent left-[82%] top-[2%] tablet:left-[88%] desktop:left-[92%] desktop:top-[2%]"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
            <div className="bg-[#EDF4F7] px-8 py-8 desktop:px-16 desktop:py-8 rounded flex flex-row content-center items-center gap-4">
              <div className="w-14 h-14">
                <img src={'/NFTmintedicon.svg'} className="max-w-full w-full object-cover" alt="" />
              </div>
              <h1 className="text-2xl font-bold">NFT Minted</h1>
            </div>
            <div className="flex flex-col gap-6 px-6 py-8 desktop:px-16 desktop:py-8">
              <div className="flex flex-col">
                <h3 className="text-xs font-semibold mb-2">Wallet Address</h3>
                <div className="flex flex-row gap-4">
                  <p className="text-base font-semibold break-all">
                    {currentWallet ?? 'Not yet connected!'}
                  </p>
                  <CopyToClipboard text={currentWallet ?? ''} onCopy={handleTooltipOpen}>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                      <div>
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
                          title="Address copied!"
                          leaveDelay={200}
                        >
                          <IconButton
                            className="shadow-none hover:bg-transparent"
                            onClick={handleTooltipOpen}
                          >
                            <Copy size="16" color="#8F98AA" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </ClickAwayListener>
                  </CopyToClipboard>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold mb-2">Minted NFT Fragment</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row">
                    <div className="mr-2">
                      <Building4 size="24" color="#344054" />
                    </div>
                    <p className="mr-4">Stage 1</p>
                    <p>{mintedNFT ? `${mintedNFT}` : <Skeleton />} NFT</p>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-2">
                      <Building4 size="24" color="#344054" />
                    </div>
                    <p className="mr-4">Stage 2</p>
                    <p>0 NFT</p>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-2">
                      <Building4 size="24" color="#344054" />
                    </div>
                    <p className="mr-4">Stage 3</p>
                    <p>0 NFT</p>
                  </div>
                  <div className="flex flex-row">
                    <div className="mr-2">
                      <Building4 size="24" color="#344054" />
                    </div>
                    <p className="mr-4">Stage 4</p>
                    <p>0 NFT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ContentComponent;
