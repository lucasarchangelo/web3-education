import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import MasterContractModule from "./MasterContract";

const RegisterContractModule = buildModule("MasterContractModule", (m) => {
  const masterContract = m.useModule(MasterContractModule);
  const masterRegister = m.contract("MasterContract", [masterContract]);

  return { masterRegister };
});

export default RegisterContractModule;
