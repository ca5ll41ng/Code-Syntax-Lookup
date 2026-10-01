---
id: "java-en-function-java-security-spec-x509encodedkeyspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.X509EncodedKeySpec"
title: "X509EncodedKeySpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/X509EncodedKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# X509EncodedKeySpec

This class represents the ASN.1 encoding of a public key,
 encoded according to the ASN.1 type `SubjectPublicKeyInfo`.
 The `SubjectPublicKeyInfo` syntax is defined in the X.509
 standard as follows:

 
```

 SubjectPublicKeyInfo ::= SEQUENCE {
   algorithm AlgorithmIdentifier,
   subjectPublicKey BIT STRING }
 
```

**参见**

- java.security.Key
- java.security.KeyFactory
- KeySpec
- EncodedKeySpec
- PKCS8EncodedKeySpec

> *Since 1.2*
