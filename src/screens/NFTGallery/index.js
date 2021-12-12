import React from 'react';
import {Card} from 'semantic-ui-react'
import * as BlockFrost from '../../service/blockfrost';
import NFT from "./components/NFT";

const NFTGallery = ({address, ...otherprops}) => {
    const [nftAssets, setNftAssets] = React.useState([]);

    React.useEffect(() => {
        BlockFrost.getAssets(address).then(setNftAssets);
    }, [address]);

    return (<Card.Group {...otherprops}>
        {
            nftAssets.map(asset => (<NFT asset={asset} key={asset}/>))
        }
    </Card.Group>);
};

export default NFTGallery;
