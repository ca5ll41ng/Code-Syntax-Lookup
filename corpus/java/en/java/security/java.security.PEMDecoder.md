---
id: "java-en-function-java-security-pemdecoder"
language: "java"
lang: "en"
category: "function"
name: "java.security.PEMDecoder"
title: "PEMDecoder"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMDecoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMDecoder

`PEMDecoder` implements a decoder for Privacy-Enhanced Mail (PEM) data.
 PEM is a textual encoding used to store and transfer cryptographic
 objects, such as asymmetric keys, certificates, and certificate revocation
 lists (CRLs). It is defined in RFC 1421 and RFC 7468. PEM consists of
 Base64-encoded content enclosed by a header and footer that identify the
 type of the content.

 

 The `decode` and `decode` methods
 return an instance of a class that matches the PEM type and implements
 `BinaryEncodable`, as follows:
 
   
- CERTIFICATE: `X509Certificate`
   
- X509 CRL: `X509CRL`
   
- PUBLIC KEY: `PublicKey`
   
- PRIVATE KEY: `PrivateKey` or `KeyPair`
   (if the encoding contains a public key)
   
- ENCRYPTED PRIVATE KEY: `EncryptedPrivateKeyInfo`
   
- Other types: `PEM`
 

 When used with a `PEMDecoder` instance configured for decryption:
 
   
- ENCRYPTED PRIVATE KEY: `PrivateKey` or `KeyPair`
   (if the encoding contains a public key)
 

 

 If the PEM type has no corresponding class, `decode(String)` and
 `decode(InputStream)` return a `PEM` object.

 

 If application code switches over the `BinaryEncodable` result of
 `decode` or `decode`, the `switch` cannot
 be made exhaustive simply by providing a `case` label for every permitted
 subtype listed for `BinaryEncodable`; there also must be a `default`
 or `case BinaryEncodable` label to handle additional subtypes that
 might be added in the future.

 

 The `decode` and `decode`
 methods accept a parameter specifying the desired `BinaryEncodable`
 result. These methods avoid the need for casting and are useful when multiple
 representations are possible. For example, if the PEM contains both public and
 private keys, specifying `PrivateKey.class` returns only the private key.
 If `X509EncodedKeySpec.class` is provided, the public key encoding is
 returned as a `X509EncodedKeySpec`. To retrieve a `PEM` object,
 use `PEM.class`. If the specified class does not
 match the PEM content, a `ClassCastException` is thrown.

 

 In addition to the types listed above, these methods support the
 following PEM types and `BinaryEncodable` classes when specified as
 parameters:
  
   
- PUBLIC KEY: `X509EncodedKeySpec`
   
- PRIVATE KEY: `PKCS8EncodedKeySpec`
   
- PRIVATE KEY: `PublicKey` (if the encoding contains a public key)
   
- PRIVATE KEY: `X509EncodedKeySpec` (if the encoding contains a public key)
 

 When used with a `PEMDecoder` instance configured for decryption:
 
   
- ENCRYPTED PRIVATE KEY: `PKCS8EncodedKeySpec`
   
- ENCRYPTED PRIVATE KEY: `PublicKey` (if the encoding contains a public key)
   
- ENCRYPTED PRIVATE KEY: `X509EncodedKeySpec` (if the encoding contains a public key)
 

 

 A new `PEMDecoder` instance is created when configured
 with `withFactoriesOf` or `withDecryption`.
 The `withFactoriesOf` method uses the specified provider when
 obtaining `KeyFactory` and `CertificateFactory` instances used
 during decoding. The `withDecryption` method configures the
 decoder to decrypt and decode encrypted private key PEM data using the given
 password. If decryption fails, a `CryptoException` is thrown.
 If an encrypted PEM is processed by a decoder not configured
 for decryption, an `EncryptedPrivateKeyInfo` is returned.
 A `PEMDecoder` configured for decryption can also decode unencrypted PEM.

 

 This class is immutable and thread-safe.

 

 Example: decode a private key:
 {@snippet lang = java:
     PEMDecoder pd = PEMDecoder.of();
     PrivateKey priKey = pd.decode(priKeyPEM, PrivateKey.class);
 }

 

 Example: configure decryption and a factory provider:
 {@snippet lang = java:
     PEMDecoder pd = PEMDecoder.of().withDecryption(password).
             withFactoriesOf(provider);
     BinaryEncodable pemData = pd.decode(privKeyPEM);
}

 X509 CERTIFICATE and X.509 CERTIFICATE as `X509Certificate`, and CRL as
 `X509CRL`. Other implementations may recognize additional PEM types.

       RFC 1421: Privacy Enhancement for Internet Electronic Mail
       RFC 5958: Asymmetric Key Packages
       RFC 7468: Textual Encodings of PKIX, PKCS, and CMS Structures

**参见**

- PEMEncoder
- PEM
- EncryptedPrivateKeyInfo
- BinaryEncodable

> *Since 28*
