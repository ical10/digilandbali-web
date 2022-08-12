import DigilandAPI from '.';

type refCodePayloadProps = {
  projectId: string;
  nftId: string;
  walletAddress: string;
  tokenId: number;
  quantity: number;
  currencyId: string;
  amount: number;
  referralCode: string;
};

export const checkRefCode = async (code: string) => {
  try {
    const {data} = await DigilandAPI().request({
      url: `/users/${code}`,
      method: 'GET',
    });
    return data;
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const mintNFTWithRefCode = async (payload: refCodePayloadProps) => {
  try {
    const {projectId, nftId, walletAddress, tokenId, quantity, currencyId, amount, referralCode} =
      payload;

    const values = {
      walletAddress,
      tokenId,
      quantity,
      currencyId,
      amount,
      referralCode,
    };
    const {data} = await DigilandAPI().request({
      url: `projects/${projectId}/nfts/${nftId}/mintings`,
      method: 'POST',
      data: values,
    });
    return data;
  } catch (error) {
    console.log({error});
  }
};
