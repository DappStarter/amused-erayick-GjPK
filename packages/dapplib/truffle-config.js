require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift razor sister connect harvest brave slot general'; 
let testAccounts = [
"0x4f46a6a3d68e7a81eb67f4a8b83e89bc9f55510717bf682f048e3790d18f4756",
"0xf6dc7c236f37614d7cf0fdd1b5cb9ebe8e64d61c95768f408d70a77429e14376",
"0x2762e038f07ac54f970b5de91de0aa02e8ae1b7b38953f4ce44a68eab3bec859",
"0xa6f8803c009c26d0fa85cc404735b08295b04519b2d5a837d6440098015fc4b1",
"0x01ca3121955f87c142876fa29bcbe07f617cb4f7d6d4a0ec18dbf84628d1d674",
"0x8b84ef12e9efa3f5c1075ee29589ac05d234742a004442702c1745c7c5a3b394",
"0x0bf7796b7dff63f9532fcffb9ce591a95dea2488059d8ddbd3b880fd2b9624ca",
"0xcfb20efcc525427d1cdfcb110cb0983036888fc06667cc3c42674ca183ff1115",
"0x774394e2e70d51ff96bb394ce30e459e767547741f91ae4cf624da5be9306cb4",
"0xdfccb5a32ea3c0ac041928dad1bb2b2ed2b12a7cc605664e29b18421972abaca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

