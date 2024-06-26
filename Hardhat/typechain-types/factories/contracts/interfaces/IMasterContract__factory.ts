/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMasterContract,
  IMasterContractInterface,
} from "../../../contracts/interfaces/IMasterContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserName",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "easyWay",
        type: "bool",
      },
    ],
    name: "updateStepByIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMasterContract__factory {
  static readonly abi = _abi;
  static createInterface(): IMasterContractInterface {
    return new Interface(_abi) as IMasterContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMasterContract {
    return new Contract(address, _abi, runner) as unknown as IMasterContract;
  }
}
