import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import hre from "hardhat";

describe("MasterRegister", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();

    return { lock };
  }

  describe("Deployment", function () {
    it("Deploy test", async function () {

    });
  });

  describe("Student deployment", function () {
    describe("Easy way", function () {
      it("student should deploy the easy way mode [Success]", async function () {
        const { lock } = await loadFixture(deployOneYearLockFixture);
      });
    });

    describe("Hard way", function () {
      it("student should deploy the hard way mode [Success]", async function () {
      });
    });
  });
});
