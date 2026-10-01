---
id: "java-en-function-java-security-binaryencodable"
language: "java"
lang: "en"
category: "function"
name: "java.security.BinaryEncodable"
title: "BinaryEncodable"
directive: "type"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/BinaryEncodable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BinaryEncodable

This interface identifies cryptographic objects that can be converted to
 and from standardized binary representations.

 

 The APIs for cryptographic objects such as public keys, private keys,
 certificates, and certificate revocation lists all provide the means to
 convert their instances to and from standardized binary representations.
 Other kinds of cryptographic objects, such as certificate requests, have
 no corresponding API but can still be expressed as standardized binary
 representations.  The `BinaryEncodable` interface allows APIs that
 operate on standardized binary representations, such as `PEMEncoder`
 and `PEMDecoder`, to process all kinds of cryptographic objects
 uniformly.

 

 The permitted subtype `PEM` is notable for supporting the encoding
 and decoding of PEM text that represents cryptographic objects for which no
 API exists. In future releases, other permitted subtypes may be added to
 support the encoding and decoding of additional kinds of cryptographic
 objects as standardized binary representations.

 

 The list of permitted subtypes shown after `permits` is not
 exhaustive. This means if application code switches over a
 `BinaryEncodable` value, the `switch` cannot be made exhaustive
 simply by providing a `case` label for every permitted subtype shown
 in the list; there also must be a `default` or
 `case BinaryEncodable` label to handle additional subtypes. This
 allows the list of permitted subtypes to change over time without causing
 pre-existing switches to fail because of an unrecognized subtype.

**参见**

- AsymmetricKey
- KeyPair
- PKCS8EncodedKeySpec
- X509EncodedKeySpec
- EncryptedPrivateKeyInfo
- X509Certificate
- X509CRL
- PEM

> *Since 28*
