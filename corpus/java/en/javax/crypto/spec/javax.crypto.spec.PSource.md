---
id: "java-en-function-javax-crypto-spec-psource"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.PSource"
title: "PSource"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/PSource.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PSource

This class specifies the source for encoding input P in OAEP Padding,
 as defined in the
 PKCS#1 v2.2 standard.
 
```

 PSourceAlgorithm ::= AlgorithmIdentifier {
   {PKCS1PSourceAlgorithms}
 }
 
```

 where
 
```

 PKCS1PSourceAlgorithms    ALGORITHM-IDENTIFIER ::= {
   { OID id-pSpecified PARAMETERS EncodingParameters },
   ...  -- Allows for future expansion --
 }
 EncodingParameters ::= OCTET STRING(SIZE(0..MAX))
 
```

      RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2

> *Since 1.5*
