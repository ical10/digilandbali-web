import {Text} from '@chakra-ui/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import {useState, useEffect} from 'react';

import useWeb3Store from 'src/store';

type NotificationModalProps = {
  title: string;
  subtitle: string;
};

const NotificationModal = ({title, subtitle}: NotificationModalProps) => {
  const mintedTxHash = useWeb3Store(state => state.mintedTxHash);

  useEffect(() => {
    if (mintedTxHash.length) handleOpen();
  }, [mintedTxHash]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg flex flex-col justify-center items-center gap-6">
          <Text id="modal-title" className="font-semibold text-2xl">
            {title}
          </Text>
          <img src="/success-logo.svg" alt="" />
          <Text id="modal-description" className="font-medium text-sm text-center">
            {subtitle}
          </Text>
          <Button
            variant="contained"
            sx={{fontFamily: 'Syne', textTransform: 'none', fontWeight: 500, fontSize: '15px'}}
            onClick={handleClose}
          >
            Dismiss
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NotificationModal;
