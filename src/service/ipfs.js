
const gateway = 'https://gateway.ipfs.io/ipfs/';
export function ipfs2https(ipfsUrl) {
    const url =  new URL(ipfsUrl);
    return gateway + url.pathname;
}
