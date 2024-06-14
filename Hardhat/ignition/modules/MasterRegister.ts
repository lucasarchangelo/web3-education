import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import MasterContractModule from "./MasterContract";

const RegisterContractModule = buildModule("MasterRegisterModule", (m) => {
  const { masterContract } = m.useModule(MasterContractModule);
  const masterRegister = m.contract("MasterRegister", [masterContract]);

  return { masterRegister };
});

export default RegisterContractModule;
