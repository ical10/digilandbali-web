import {InjectedConnector} from '@wagmi/core';

import {useEffect} from 'react';

import useWeb3Store from 'src/store';
import {useConnect, useDisconnect} from 'wagmi';

enum ButtonAction {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
}

type ConnectButtonProps = {
  connector: InjectedConnector;
  action: ButtonAction;
};

const ConnectButton = ({connector, action}: ConnectButtonProps) => {
  const connecting = useWeb3Store(state => state.connecting);
  const toggleConnecting = useWeb3Store(state => state.toggleConnecting);

  const {connect, isLoading, status} = useConnect({
    onSuccess() {
      toggleConnecting();
    },
  });
  const {disconnect} = useDisconnect();

  const handleConnect = () => {
    connect({connector});
    toggleConnecting();
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <button
      className="p-2 bg-[#406aff] rounded"
      key={connector.id}
      disabled={!connector.ready || isLoading || status === 'loading' || connecting}
      onClick={action === ButtonAction.CONNECT ? () => handleConnect() : () => handleDisconnect()}
    >
      <span>
        {connecting ? 'connecting' : action === ButtonAction.CONNECT ? 'connect' : 'disconnect'}
      </span>
    </button>
  );
};

export {ConnectButton, ButtonAction};
