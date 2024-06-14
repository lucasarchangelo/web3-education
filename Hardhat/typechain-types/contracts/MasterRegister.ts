/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MasterRegisterInterface extends Interface {
  getFunction(
    nameOrSignature: "deployEasyWay" | "masterContract" | "validateStep"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployEasyWay",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "masterContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validateStep",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployEasyWay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "masterContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateStep",
    data: BytesLike
  ): Result;
}

export interface MasterRegister extends BaseContract {
  connect(runner?: ContractRunner | null): MasterRegister;
  waitForDeployment(): Promise<this>;

  interface: MasterRegisterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deployEasyWay: TypedContractMethod<[message: string], [void], "nonpayable">;

  masterContract: TypedContractMethod<[], [string], "view">;

  validateStep: TypedContractMethod<
    [contractAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deployEasyWay"
  ): TypedContractMethod<[message: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "masterContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "validateStep"
  ): TypedContractMethod<[contractAddress: AddressLike], [void], "nonpayable">;

  filters: {};
}