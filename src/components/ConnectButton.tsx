import {InjectedConnector} from '@wagmi/core';

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
  const {connect} = useConnect();
  const {disconnect} = useDisconnect();

  const handleConnect = () => {
    connect({connector});
  };

  const handleDisconnect = () => {
    disconnect();
  };

  return (
    <button
      className="p-2 bg-[#406aff] rounded"
      key={connector.id}
      onClick={action === ButtonAction.CONNECT ? () => handleConnect() : () => handleDisconnect()}
    >
      <span>{action === ButtonAction.CONNECT ? 'connect' : 'disconnect'}</span>
    </button>
  );
};

export {ConnectButton, ButtonAction};
