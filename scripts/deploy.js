const hre = require("hardhat");

async function main() {
  // Récupération du contrat
  const HelloBlockchain = await hre.ethers.getContractFactory(
    "HelloBlockchain"
  );

  // On le déploie
  const hello = await HelloBlockchain.deploy("Hello word !");

  await hello.waitForDeployment();

  console.log(`Contrat déployé à l'adresse : ${await hello.getAddress()}`);
}

// Exécute le script
main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
