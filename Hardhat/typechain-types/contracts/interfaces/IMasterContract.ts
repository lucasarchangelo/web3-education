/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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
} from "../../common";

export interface IMasterContractInterface extends Interface {
  getFunction(
    nameOrSignature: "getUserName" | "updateStepByIndex"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getUserName",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStepByIndex",
    values: [AddressLike, BigNumberish, string, AddressLike, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "getUserName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStepByIndex",
    data: BytesLike
  ): Result;
}

export interface IMasterContract extends BaseContract {
  connect(runner?: ContractRunner | null): IMasterContract;
  waitForDeployment(): Promise<this>;

  interface: IMasterContractInterface;

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

  getUserName: TypedContractMethod<
    [userAddress: AddressLike],
    [string],
    "view"
  >;

  updateStepByIndex: TypedContractMethod<
    [
      userAddress: AddressLike,
      index: BigNumberish,
      name: string,
      contractAddress: AddressLike,
      easyWay: boolean
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getUserName"
  ): TypedContractMethod<[userAddress: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "updateStepByIndex"
  ): TypedContractMethod<
    [
      userAddress: AddressLike,
      index: BigNumberish,
      name: string,
      contractAddress: AddressLike,
      easyWay: boolean
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
