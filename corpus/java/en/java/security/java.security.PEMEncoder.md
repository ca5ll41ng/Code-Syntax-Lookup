---
id: "java-en-function-java-security-pemencoder"
language: "java"
lang: "en"
category: "function"
name: "java.security.PEMEncoder"
title: "PEMEncoder"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/PEMEncoder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PEMEncoder

`PEMEncoder` implements an encoder for Privacy-Enhanced Mail (PEM)
 data.  PEM is a textual encoding used to store and transfer cryptographic
 objects, such as asymmetric keys, certificates, and certificate revocation
 lists (CRLs). It is defined in RFC 1421 and RFC 7468.  PEM consists of a
 Base64-encoded content enclosed by a type-identifying header
 and footer.

 

 Encoding can be performed on cryptographic objects that
 implement `BinaryEncodable`. The `encode`
 and `encodeToString` methods encode a `BinaryEncodable`
 into PEM and return the data in a byte array or `String`.

 

 Private keys can be encrypted and encoded by configuring a
 `PEMEncoder` with the `withEncryption` method,
 which takes a password and returns a new `PEMEncoder` instance
 configured to encrypt the key with that password.

 

 PKCS #8 v2.0 defines the ASN.1 OneAsymmetricKey structure, which may
 contain both private and public keys.
 `KeyPair` objects passed to the `encode` or
 `encodeToString` methods are encoded as a
 OneAsymmetricKey structure using the "PRIVATE KEY" type.

 

 When encoding a `PEM` object, the API surrounds
 `content` with a PEM header and footer based on
 `type`. The value returned by `leadingData` is not
 included in the output.

 

 The following lists the supported `BinaryEncodable` classes and
 the PEM types they encode to:
 
   
- `X509Certificate`: CERTIFICATE
   
- `X509CRL`: X509 CRL
   
- `PublicKey`: PUBLIC KEY
   
- `PrivateKey`: PRIVATE KEY
   
- `EncryptedPrivateKeyInfo`: ENCRYPTED PRIVATE KEY
   
- `KeyPair`: PRIVATE KEY
   
- `X509EncodedKeySpec`: PUBLIC KEY
   
- `PKCS8EncodedKeySpec`: PRIVATE KEY
   
- `PEM`: `type`
 

 

 When used with a `PEMEncoder` instance configured for encryption:
 
   
- `PrivateKey`: ENCRYPTED PRIVATE KEY
   
- `KeyPair`: ENCRYPTED PRIVATE KEY
   
- `PKCS8EncodedKeySpec`: ENCRYPTED PRIVATE KEY
 

 

 This class is immutable and thread-safe.

 

 Example: encode a private key:
 {@snippet lang = java:
     PEMEncoder pe = PEMEncoder.of();
     byte[] pemData = pe.encode(privKey);
 }

 

 Example: encrypt and encode a private key using a password:
 {@snippet lang = java:
     PEMEncoder pe = PEMEncoder.of().withEncryption(password);
     byte[] pemData = pe.encode(privKey);
 }

       RFC 1421: Privacy Enhancement for Internet Electronic Mail
       RFC 5958: Asymmetric Key Packages
       RFC 7468: Textual Encodings of PKIX, PKCS, and CMS Structures

**参见**

- PEMDecoder
- PEM
- EncryptedPrivateKeyInfo

> *Since 28*
