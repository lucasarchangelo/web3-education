import { useAccount, useWriteContract, useReadContract } from 'wagmi'
import { config } from '../config/wagmi_config';
import { useEffect } from 'react';
import { masterContractNetworkConfig } from '../deployments/contracts.config';
import abi from '../deployments/abis/master_contract_abi.json';

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
        return masterContractNetworkConfig[chainId];
    };

    const createUser = async (name: string) => {
        writeContract({ 
            abi,
            address: `0x${getAddressByChainId(String(account.chainId))}`,
            functionName: 'createUser',
            args: [
                name,
            ],
         });
    }

    const getUserName = async (address: string) => {
        const result = useReadContract({
            abi,
            address: `0x${getAddressByChainId(String(account.chainId))}`,
            functionName: 'getUserName',
            args: [address],
          });

          return result;
    }

    const getStepByIndex = async (address: string, index: number) => {
        const result = useReadContract({
            abi,
            address: `0x${getAddressByChainId(String(account.chainId))}`,
            functionName: 'getStepByIndex',
            args: [address, index],
          });

          return result;
    }
}

