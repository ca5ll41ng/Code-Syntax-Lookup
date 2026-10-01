---
id: "java-en-function-java-security-spec-pssparameterspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.PSSParameterSpec"
title: "PSSParameterSpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/PSSParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PSSParameterSpec

This class specifies a parameter spec for the RSASSA-PSS signature scheme,
 as defined in the
 PKCS#1 v2.2 standard.

 

Its ASN.1 definition in the PKCS #1 standard is described below:
 
```

 RSASSA-PSS-params ::= SEQUENCE {
   hashAlgorithm      [0] HashAlgorithm      DEFAULT sha1,
   maskGenAlgorithm   [1] MaskGenAlgorithm   DEFAULT mgf1SHA1,
   saltLength         [2] INTEGER            DEFAULT 20,
   trailerField       [3] TrailerField       DEFAULT trailerFieldBC(1)
 }
 
```

 where
 
```

 HashAlgorithm ::= AlgorithmIdentifier {
   {OAEP-PSSDigestAlgorithms}
 }
 MaskGenAlgorithm ::= AlgorithmIdentifier { {PKCS1MGFAlgorithms} }
 TrailerField ::= INTEGER { trailerFieldBC(1) }

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
 
```

      RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2

**参见**

- MGF1ParameterSpec
- AlgorithmParameterSpec
- java.security.Signature

> *Since 1.4*
