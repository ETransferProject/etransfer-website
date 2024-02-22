import { BackEndNetworkType, NetworkItem } from '@/types/network';
import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from './misc';

export type WebsiteNetworkConfig = {
  [key in BackEndNetworkType]: NetworkItem;
};

export const BackEndNetWorkMap: Record<string, WebsiteNetworkConfig> = {
  ETransfer: {
    dev: {
      name: 'aelf Testnet',
      networkType: 'TESTNET',
      cmsUrl: 'https://testhome.etransfer.exchange/cms/', //'https://testcms.etransfer.exchange/',
      s3Url: 'https://etransfer-cms-dev.s3.ap-northeast-1.amazonaws.com/',
    },
    mainnet: {
      name: 'aelf Mainnet',
      networkType: 'MAIN',
      cmsUrl: 'https://cms.etransfer.exchange/',
      s3Url: 'https://etransfer-cms.s3.ap-northeast-1.amazonaws.com/',
    },
  },
  // Add More ...
};

export const s3Url =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.s3Url
    : '';
