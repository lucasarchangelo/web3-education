import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MasterContractModule = buildModule("MasterContractModule", (m) => {

  const masterContract = m.contract("MasterContract");

  return { masterContract };
});

export default MasterContractModule;
