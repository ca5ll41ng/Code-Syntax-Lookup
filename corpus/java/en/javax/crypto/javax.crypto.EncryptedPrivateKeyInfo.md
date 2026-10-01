---
id: "java-en-function-javax-crypto-encryptedprivatekeyinfo"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.EncryptedPrivateKeyInfo"
title: "EncryptedPrivateKeyInfo"
directive: "type"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/EncryptedPrivateKeyInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EncryptedPrivateKeyInfo

This class implements the `EncryptedPrivateKeyInfo` type
 as defined in PKCS #8.
 

Its ASN.1 definition is as follows:

 
```

 EncryptedPrivateKeyInfo ::=  SEQUENCE {
     encryptionAlgorithm   AlgorithmIdentifier,
     encryptedData   OCTET STRING }

 AlgorithmIdentifier  ::=  SEQUENCE  {
     algorithm              OBJECT IDENTIFIER,
     parameters             ANY DEFINED BY algorithm OPTIONAL  }
 
```

**参见**

- java.security.spec.PKCS8EncodedKeySpec

> *Since 1.4*
