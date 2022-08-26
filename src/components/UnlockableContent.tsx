import {Tabs, TabList, TabPanels, Tab, TabPanel, Text, Grid, Center} from '@chakra-ui/react';
import {useMediaQuery} from '@mui/material';

import getConfig from 'next/config';

import contractInterface from '../../public/contracts/LBSFragment.json';

import NFTCard from 'src/components/NFTCard';
import PermissiveDocument from 'src/components/PermissiveDocument';
import {useContractRead, useAccount} from 'wagmi';

const EmptyNFTContent = () => {
  return (
    <div className="flex">
      <div className="pt-8 px-6">
        <Text className="text-base font-semibold mb-2">My NFTs</Text>
        <Text className="text-sm font-normal mb-4">
          Choose your NFT to view the Permissive Document
        </Text>

        <Tabs variant="unstyled">
          <StyledTabList />
          <TabPanels>
            <TabPanel>
              <div className="flex flex-col justify-center">
                <img src="/Unlockables/EmptyNFT.svg" alt="empty-nft" />
                <Center>There is no eligible NFT</Center>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col justify-center">
                <img src="/Unlockables/EmptyNFT.svg" alt="empty" />
                <Center>There is no eligible NFT</Center>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

const StyledTabList = () => {
  const tabNames = [
    {
      id: 'nft-fragments',
      title: 'NFT Fragments',
    },
    {
      id: 'nft-apartments',
      title: 'NFT Apartments',
    },
  ];

  return (
    <TabList className="gap-2 mb-8">
      {tabNames.map(tabName => (
        <Tab
          key={tabName.id}
          _selected={{color: 'white', bg: '#131736'}}
          className="rounded-[150px] border-[1px] border-[#131736]"
        >
          <Text fontSize="sm" fontWeight="normal">
            {tabName.title}
          </Text>
        </Tab>
      ))}
    </TabList>
  );
};

const UnlockableContent = () => {
  const isDesktop = useMediaQuery('(min-width: 919px)', {noSsr: true});

  const {address} = useAccount();

  const {publicRuntimeConfig} = getConfig();
  const lbsfContractAddress = publicRuntimeConfig.lbsfContractAddress;

  const {abi} = contractInterface;

  const tokenId = 1;

  const {data} = useContractRead({
    addressOrName: lbsfContractAddress,
    contractInterface: abi,
    functionName: 'balanceOf',
    args: [address, tokenId],
  });

  if (!address || !data) {
    return <EmptyNFTContent />;
  }

  return (
    <div className="flex">
      {isDesktop ? (
        <>
          <div className="pt-8 px-6">
            <Text className="text-base font-semibold mb-2">My NFTs</Text>
            <Text className="text-sm font-normal mb-4">
              Choose your NFT to view the Permissive Document
            </Text>

            <Tabs variant="unstyled">
              <StyledTabList />
              <TabPanels>
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                    <NFTCard imageUrl={'/Unlockables/apart1.svg'} qty={data.toString()} />
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col justify-center">
                    <img src="/Unlockables/EmptyNFT.svg" alt="empty" />
                    <Center>There is no eligible NFT</Center>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <PermissiveDocument />
        </>
      ) : (
        <div className="pt-8 px-6">
          <Text className="text-base font-semibold mb-2">My NFTs</Text>
          <Text className="text-sm font-normal mb-4">
            Choose your NFT to view the Permissive Document
          </Text>

          <Tabs variant="unstyled">
            <StyledTabList />
            <TabPanels>
              <TabPanel>
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  <NFTCard imageUrl={'/Unlockables/apart1.svg'} qty={data.toString()} />
                </Grid>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col justify-center">
                  <img src="/Unlockables/EmptyNFT.svg" alt="empty-nft" />
                  <Center>There is no eligible NFT</Center>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default UnlockableContent;
