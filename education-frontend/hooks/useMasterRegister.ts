import { useAccount, useWriteContract } from 'wagmi'
import { config } from '../config/wagmi_config';
import { useEffect } from 'react';
import { masterRegisterNetworkConfig } from '../deployments/contracts.config';
import abi from '../deployments/abis/master_register_abi.json';

const useMasterRegister = () => {

    const account = useAccount({
        config,
    });

    const { writeContract } = useWriteContract();

    useEffect(() => {
        if(account.status === 'connected') {
            console.log(account.address);
        }
    }, []);

    const getAddressByChainId = (chainId: string) => {
        return masterRegisterNetworkConfig[chainId]
    };

    const validateStep = async (address: string) => {
        writeContract({
            abi,
            address: `0x${getAddressByChainId(String(account.chainId))}`,
            functionName: 'validateStep',
            args: [
                address,
            ],
         });
    }

    const deployEasyWay = async (message: string) => {
        writeContract({ 
            abi,
            address: `0x${getAddressByChainId(String(account.chainId))}`,
            functionName: 'deployEasyWay',
            args: [
                message,
            ],
         });
    }
}

