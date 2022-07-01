import ContentComponent from './ContentComponent';

const MintComponent = ({walletAddress}) => {
  return (
    <>
      <div>
        <ContentComponent walletAddress={walletAddress} />
      </div>
    </>
  );
};

export default MintComponent;
