import { ChainId } from '@usedapp/core';

export type AddressMap = { [chainId: number]: string };

export const NFT_ADDRESSES: AddressMap = {
	[ChainId.Rinkeby]: '0xe07B2a621063aa3caC05308015a8FBaAEe27C1bb',
};
