import * as Component from './styles';
import ChainsWeb3 from '../../config/chains.json';
import PoW from '../../config/pow.json';
import ChainsUI from '../../config/platforms.json';
import {createRef, MutableRefObject, useContext, useEffect, useRef, useState} from 'react';
import { useAccount} from 'wagmi';
import {ThemeContext} from '../../context/ThemeContext';

const POW = PoW as any;

interface IChain {
    isLoading: boolean;
    isEmpty: boolean;
    isFilled: boolean;
    chainId: string;
}

type ChainList = {[key: string]: IChain};

let DEFAULT_CHAINS: ChainList = {};

const default_values = {
    isLoading: false,
    isEmpty: false,
    isFilled: false
}
Object.entries(ChainsWeb3.mainnet).forEach((v) => {
    DEFAULT_CHAINS[v[0]] = {
        ...default_values,
        chainId: v[0],
    };
});


export default function FillUp() {
    
    const [chainList, setChainList] = useState<ChainList>(DEFAULT_CHAINS);
    const { isDarkTheme } = useContext(ThemeContext);

    /**
     *
     * Default Account
     * @dev Required currently without captcha check
     *
    **/
    const { address} = useAccount();
    
    const addressRef = createRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
    
    /**
     *
     * @function Quick Out w/out Address
     * @deprecated Future Deprecation Planned
    **/
    if (!address) return <div></div>;
     
    
    return (
        <Component.Container>
            <Component.Centered>
                <Component.Title>Ready to <strong>FUEL</strong> Up?</Component.Title>
                <Component.Slogan>Click Fuel Wallet to automatically fill up across all supported SKALE Chains. Want to fill up a different address? Copy and paste it in</Component.Slogan>
                <span style={{ height: '15px' }} />
                <Component.FillRow> 
                    <Component.AddressInput type="text" defaultValue={address} ref={addressRef} />
                    <Component.FillAllButton><strong>FUEL Wallet</strong></Component.FillAllButton>
                </Component.FillRow>
            </Component.Centered>
            <Component.ChainStatusList>
                {Object.entries(ChainsWeb3.mainnet).map((v: any, index: number) => {
                    const status: IChain = chainList[v[0]];
                    const pow = POW[v[0]];
                   
                    let textColor = 'var(--text-color)';
                    if (status) {
                     if (status.isEmpty) {
                            textColor = "red";
                     } else if (status.isFilled) {
                         textColor = "green";
                     }
                    }

                    return <Component.ChainStatus color={textColor}>{v[1].name}</Component.ChainStatus>
                })} 
            </Component.ChainStatusList>
        </Component.Container>
    );
}
