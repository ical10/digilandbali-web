import {Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react';
import {Icon} from '@chakra-ui/react';

import {ArrowDown2} from 'iconsax-react';

type CustomizedMenuProps = {
  truncatedAddress: string;
};

function ArrowDownIcon() {
  return <Icon as={ArrowDown2} />;
}

const CustomizedMenu = ({truncatedAddress}: CustomizedMenuProps) => {
  return (
    <div className="dropdown-menu">
      <Menu>
        <MenuButton
          rightIcon={
            <div className="menu-arrow">
              <ArrowDownIcon />
            </div>
          }
          _hover={{background: 'darkBlue.100'}}
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
          <MenuItem
            boxShadow="none"
            color={'gray.400'}
            _focus={{
              color: 'white',
            }}
          >
            View My NFT Legal Document
          </MenuItem>
          <MenuItem
            boxShadow="none"
            color={'gray.400'}
            _focus={{
              color: 'white',
            }}
          >
            View On Explorer
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default CustomizedMenu;
