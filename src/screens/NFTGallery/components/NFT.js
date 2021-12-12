import React from 'react';
import {Card, Image} from "semantic-ui-react";
import {getAssetMetadata} from "../../../service/blockfrost";
import {ipfs2https} from "../../../service/ipfs";

const NFT = ({asset}) => {
    const [name, setName] = React.useState('');
    const [image, setImage] = React.useState('');
    const [description, setDescription] = React.useState('');


    React.useEffect(() => {
        const _fetchAsset = async (asset) => {
            const {name, description, image} = await getAssetMetadata(asset);
            setName(name);
            setDescription(description);
            setImage(ipfs2https(image));
        }
        _fetchAsset(asset).then();
    }, [asset]);
    return (<Card
        image={image}
        header={name}
        description={description}
    />);
}

export default NFT;
