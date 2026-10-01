---
id: "java-en-function-java-security-spec-pkcs8encodedkeyspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.PKCS8EncodedKeySpec"
title: "PKCS8EncodedKeySpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/PKCS8EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PKCS8EncodedKeySpec

This class represents the ASN.1 encoding of a private key,
 encoded according to the ASN.1 type `OneAsymmetricKey`.
 The `OneAsymmetricKey` syntax is defined in the PKCS#8 standard
 as follows:

 
```

 OneAsymmetricKey ::= SEQUENCE {
   version Version,
   privateKeyAlgorithm PrivateKeyAlgorithmIdentifier,
   privateKey PrivateKey,
   attributes       [0] Attributes OPTIONAL,
   ...,
   [[2: publicKey  [1] PublicKey OPTIONAL ]],
   ...
 }

 PrivateKeyInfo ::= OneAsymmetricKey

 Version ::= INTEGER { v1(0), v2(1) }

 PrivateKeyAlgorithmIdentifier ::= AlgorithmIdentifier

 PrivateKey ::= OCTET STRING

 PublicKey ::= BIT STRING

 Attributes ::= SET OF Attribute
 
```

     RFC 5958: Asymmetric Key Packages

**参见**

- java.security.Key
- java.security.KeyFactory
- KeySpec
- EncodedKeySpec
- X509EncodedKeySpec

> *Since 1.2*
