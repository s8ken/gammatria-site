const crypto = require('crypto');

// Generate ED25519 key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('ed25519', {
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

console.log('ED25519 Private Key (PEM format):');
console.log(privateKey);

console.log('\nED25519 Public Key (PEM format):');
console.log(publicKey);

// Extract the raw private key bytes and convert to hex
const privateKeyDer = crypto.createPrivateKey(privateKey).export({
  type: 'pkcs8',
  format: 'der'
});

// For ED25519, the private key is the last 32 bytes of the PKCS#8 DER encoding
const privateKeyHex = privateKeyDer.slice(-32).toString('hex');

console.log('\nED25519 Private Key (Hex format for environment variable):');
console.log(privateKeyHex);

console.log('\nTo use in Vercel environment variables:');
console.log(`ED25519_PRIV_HEX=${privateKeyHex}`);
