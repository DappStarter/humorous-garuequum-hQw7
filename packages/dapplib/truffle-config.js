require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain umbrella include private fox turtle'; 
let testAccounts = [
"0x710dd3af9e69db250b2d9af6471f2238cc7b116d406ce7f935b731a98e0af655",
"0x271a4b4648e3a3020ec8969f2a46c156da836b989af9b9094d128d6a41a2959b",
"0x23e4952ef8d3dfb0dc0009a8a9aee408454461238645e47cc203d2982906403a",
"0xe97746de804e3eb2027494b2bad8e9fa7ec24e21ded7bafea39324bfe4f5a003",
"0x4f098a856895be96c1d5169ebba0200f4fe5b8982b27e60d61ab8bb89dec9e6d",
"0x7416e2aa44e9360c79778066d40577094a400e00acf6cdef1f522f2f323dd0a7",
"0x2f0af2af2a47d99c299e11b98897a3720115f800ca9f292246b993f9dd0b02fa",
"0xa118741550c5a2a7574313c8ea875ea9053e8e008d5201d13687289de3015f37",
"0x6e0bb15681f0ab78790cf440d4880a06be6cef4469661bd10d81620ee95a47a5",
"0xc20cd7515a7a07becf4d829c5451ef94cbbd7a4a7dadc710ba2b301860cbb0d0"
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

