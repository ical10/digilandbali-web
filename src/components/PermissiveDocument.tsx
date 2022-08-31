import {Text} from '@chakra-ui/react';

import {useEffect, useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

import CustomModal from './CustomModal';

import {ArrowCircleLeft, ArrowCircleRight} from 'iconsax-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PermissiveDocument = ({tabId, document}: {tabId: string; document: string}) => {
  const [successRender, setSuccessRender] = useState<boolean>(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isOpenModalBurn, setIsOpenModalBurn] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({numPages}: {numPages: number}) => {
    setNumPages(numPages);
    setPageNumber(1);
    setSuccessRender(true);
  };

  const changePage = (offSet: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  };

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };

  useEffect(() => {
    setSuccessRender(false);
    setPageNumber(1);
    setNumPages(null);
  }, [tabId]);

  return (
    <div className="py-8 px-2 desktop:px-10 w-full h-[calc(100vh-90px)] bg-[#FFF] overflow-y-scroll hide-scrollbar">
      <div className="flex gap-4 justify-between items-center">
        {tabId === 'nft-apartments' ? (
          <div>
            <Text className="text-base font-semibold mb-2">Leasehold Document</Text>
            <Text className="text-sm font-normal mb-4">Preview of physical leasehold rights</Text>
          </div>
        ) : (
          <div>
            <Text className="text-base font-semibold mb-2">Timeshare Document</Text>
            <Text className="text-sm font-normal mb-4">Preview of timeshare document</Text>
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={pageNumber > 1 ? changePageBack : null}>
            <ArrowCircleLeft size="32" color={pageNumber > 1 ? '#131736' : '#BABABA'} />
          </button>
          <button onClick={pageNumber < numPages ? changePageNext : null}>
            <ArrowCircleRight size="32" color={pageNumber < numPages ? '#131736' : '#BABABA'} />
          </button>
        </div>
      </div>

      <div className="relative">
        <Document
          file={document}
          width={'100%'}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="text-center w-full">
              <div className="text-[#8F98AA] desktop:text-[16px] mt-10">Loading Document...</div>
            </div>
          }
          noData={
            <div className="text-center w-full pt-[85px]">
              <img src="/Unlockables/EmptyNFT.svg" alt="" className="mx-auto max-w-[200px]" />
              <div className="text-[#8F98AA] desktop:text-[16px]">
                Select NFTs and View Certificate to preview document
              </div>
            </div>
          }
        >
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        {successRender && (
          <div className="text-5xl font-normal whitespace-nowrap text-[#afafaf66] absolute -rotate-45 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            Digilandbali Copyright
          </div>
        )}
      </div>
      {successRender && (
        <>
          <div className="text-center">
            Page {pageNumber} of {numPages}
          </div>

          <button
            className="w-full bg-[#436CFF] text-white rounded-[4px] p-2 mt-5"
            onClick={() => setIsOpenModalBurn(true)}
          >
            Burning Protocol
          </button>
          <ModalBurn isOpenModalBurn={isOpenModalBurn} setIsOpenModalBurn={setIsOpenModalBurn} />
        </>
      )}
    </div>
  );
};

const ModalBurn = ({isOpenModalBurn, setIsOpenModalBurn}) => {
  return (
    <CustomModal
      isOpen={isOpenModalBurn}
      title={'Coming Soon'}
      type={'small'}
      onClose={() => setIsOpenModalBurn(!isOpenModalBurn)}
    >
      <div className="text-[#131736] text-[14px] my-6">
        Burning your NFTs will allow you to turn your NFTs Apartment digital model into conventional
        model, and get physical land certificate. To do this action, kindly visit DigilandbaliHQ
      </div>
      <div className="w-full flex justify-end">
        <button
          className="p-[12px] rounded-[4px] bg-[#436CFF] w-[180px]"
          onClick={() => {
            setIsOpenModalBurn(!isOpenModalBurn);
          }}
        >
          <div className="text-[14px] text-white">Dismiss</div>
        </button>
      </div>
    </CustomModal>
  );
};

export default PermissiveDocument;
