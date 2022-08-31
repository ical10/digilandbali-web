import {Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react';
import {Icon} from '@chakra-ui/react';

import Link from 'next/link';

import {ArrowDown2} from 'iconsax-react';
import {useNetwork, useAccount} from 'wagmi';

type CustomizedMenuProps = {
  truncatedAddress: string;
};

const ArrowDownIcon = () => {
  return <Icon as={ArrowDown2} />;
};

const CustomizedMenu = ({truncatedAddress}: CustomizedMenuProps) => {
  const {chain} = useNetwork();

  const {address} = useAccount();

  return (
    <div className="dropdown-menu">
      <Menu>
        <MenuButton
          rightIcon={
            <div className="menu-arrow">
              <ArrowDownIcon />
            </div>
          }
          _hover={{background: 'darkBlue.100', borderRadius: '0px'}}
          _active={{background: 'transparent'}}
          bg={'transparent'}
          as={Button}
        >
          <div className="flex flex-row items-center gap-2">
            <div className="w-[24px] h-[24px] tablet:w-[30px] tablet:h-[30px] rounded-[25px]">
              <img src="/icon/user.svg" alt="user-icon" />
            </div>
            {truncatedAddress}
          </div>
        </MenuButton>
        <MenuList bg={'blackAlpha.700'} boxShadow="none">
          <Link href="/dashboard" passHref>
            <MenuItem
              boxShadow="none"
              color={'gray.400'}
              _focus={{
                color: 'white',
              }}
              as={'a'}
            >
              View My NFT Legal Document
            </MenuItem>
          </Link>
          <a
            href={`${chain.blockExplorers.etherscan.url}/address/${address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem
              boxShadow="none"
              color={'gray.400'}
              _focus={{
                color: 'white',
              }}
            >
              View On Etherscan
            </MenuItem>
          </a>
        </MenuList>
      </Menu>
    </div>
  );
};

export default CustomizedMenu;
