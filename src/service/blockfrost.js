const axios = require('axios');

const project_id = 'testnetBi59tDX3HjLna59m6EDnyuQ9ftnPkste';

const instance = axios.create({
    baseURL: 'https://cardano-testnet.blockfrost.io/api/v0/',
    headers: {project_id}
});

export async function getAssets(address) {
    const data = await instance.get(`/addresses/${address}/utxos`).then(r => r.data);
    const nftAssets = [];
    data.forEach(utxo => {
        utxo.amount.forEach(asset => {
            if (asset.unit !== 'lovelace' && asset.quantity === '1'){
                // this is nft
                nftAssets.push(asset.unit);
            }
        });
    });
    return nftAssets;
}

export function getAssetMetadata(asset) {
    return instance.get(`/assets/${asset}`).then(r => r.data?.onchain_metadata);
}


