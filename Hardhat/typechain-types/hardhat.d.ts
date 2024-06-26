/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "Register",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Register__factory>;
    getContractFactory(
      name: "IMasterContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMasterContract__factory>;
    getContractFactory(
      name: "MasterContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterContract__factory>;
    getContractFactory(
      name: "MasterRegister",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MasterRegister__factory>;

    getContractAt(
      name: "AccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "ERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "Register",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Register>;
    getContractAt(
      name: "IMasterContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IMasterContract>;
    getContractAt(
      name: "MasterContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterContract>;
    getContractAt(
      name: "MasterRegister",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MasterRegister>;

    deployContract(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "Register",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Register>;
    deployContract(
      name: "IMasterContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IMasterContract>;
    deployContract(
      name: "MasterContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MasterContract>;
    deployContract(
      name: "MasterRegister",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MasterRegister>;

    deployContract(
      name: "AccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.AccessControl>;
    deployContract(
      name: "IAccessControl",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IAccessControl>;
    deployContract(
      name: "ERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC165>;
    deployContract(
      name: "IERC165",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC165>;
    deployContract(
      name: "Register",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Register>;
    deployContract(
      name: "IMasterContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IMasterContract>;
    deployContract(
      name: "MasterContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MasterContract>;
    deployContract(
      name: "MasterRegister",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MasterRegister>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
