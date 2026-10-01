---
id: "java-en-function-javax-crypto-spec-oaepparameterspec"
language: "java"
lang: "en"
category: "function"
name: "javax.crypto.spec.OAEPParameterSpec"
title: "OAEPParameterSpec"
directive: "type"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/OAEPParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OAEPParameterSpec

This class specifies the set of parameters used with OAEP Padding,
 as defined in the
 PKCS#1 v2.2 standard.

 Its ASN.1 definition in PKCS#1 standard is described below:
 
```

 RSAES-OAEP-params ::= SEQUENCE {
   hashAlgorithm      [0] HashAlgorithm     DEFAULT sha1,
   maskGenAlgorithm   [1] MaskGenAlgorithm  DEFAULT mgf1SHA1,
   pSourceAlgorithm   [2] PSourceAlgorithm  DEFAULT pSpecifiedEmpty
 }
 
```

 where
 
```

 HashAlgorithm ::= AlgorithmIdentifier {
   {OAEP-PSSDigestAlgorithms}
 }
 MaskGenAlgorithm ::= AlgorithmIdentifier { {PKCS1MGFAlgorithms} }
 PSourceAlgorithm ::= AlgorithmIdentifier {
   {PKCS1PSourceAlgorithms}
 }

 OAEP-PSSDigestAlgorithms    ALGORITHM-IDENTIFIER ::= {
   { OID id-sha1       PARAMETERS NULL }|
   { OID id-sha224     PARAMETERS NULL }|
   { OID id-sha256     PARAMETERS NULL }|
   { OID id-sha384     PARAMETERS NULL }|
   { OID id-sha512     PARAMETERS NULL }|
   { OID id-sha512-224 PARAMETERS NULL }|
   { OID id-sha512-256 PARAMETERS NULL },
   ...  -- Allows for future expansion --
 }
 PKCS1MGFAlgorithms    ALGORITHM-IDENTIFIER ::= {
   { OID id-mgf1 PARAMETERS HashAlgorithm },
   ...  -- Allows for future expansion --
 }
 PKCS1PSourceAlgorithms    ALGORITHM-IDENTIFIER ::= {
   { OID id-pSpecified PARAMETERS EncodingParameters },
   ...  -- Allows for future expansion --
 }
 EncodingParameters ::= OCTET STRING(SIZE(0..MAX))
 
```

      RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2

**参见**

- java.security.spec.MGF1ParameterSpec
- PSource

> *Since 1.5*
