import { useState } from "react";
import './css/FaucetAd.css';

const FaucetAd = ({width, height}) => {
    return (
        <>
            <iframe
                className = "faucet-ad"
                id=""
                title=""
                width={width}
                height={height}
                src="">
            </iframe>
        </>
    );
}

export default FaucetAd;