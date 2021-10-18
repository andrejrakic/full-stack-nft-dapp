import React, { useEffect, useState } from 'react';
import { NFTAbi } from '../../abis/types';
import { BigNumber } from '@ethersproject/bignumber';
import { NFT_ADDRESSES } from '../../constants/addresses';
import ABI from '../../abis/NFT.abi.json';
import useContract from '../../hooks/useContract';

interface CounterProps {
	transaction?: string;
}

export default function Counter(props: CounterProps) {
	const contract = useContract<NFTAbi>(NFT_ADDRESSES, ABI);
	const [cap, setCap] = useState<number | null>(null);
	const [mintedSoFar, setMintedSoFar] = useState<number | null>(null);

	useEffect(() => {
		const getRatio = async () => {
			if (!!contract) {
				const _cap: BigNumber = await contract.cap();
				setCap(_cap.toNumber());

				const _mintedSoFar: BigNumber = await contract.tokenIdCounter();
				setMintedSoFar(_mintedSoFar.toNumber());
			}
		};

		getRatio();
	}, [contract, props.transaction]);

	return (
		<div>
			{(!!cap || !!mintedSoFar) && (
				<p className='text'>
					NFTs minted: {mintedSoFar}/{cap}
				</p>
			)}
		</div>
	);
}
