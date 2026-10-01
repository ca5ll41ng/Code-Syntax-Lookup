---
id: "java-en-function-java-security-spec-mgf1parameterspec"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.MGF1ParameterSpec"
title: "MGF1ParameterSpec"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/MGF1ParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MGF1ParameterSpec

This class specifies the set of parameters used with mask generation
 function MGF1 in OAEP Padding and RSASSA-PSS signature scheme, as
 defined in the
 PKCS#1 v2.2 standard.

 

Its ASN.1 definition in PKCS#1 standard is described below:
 
```

 PKCS1MGFAlgorithms    ALGORITHM-IDENTIFIER ::= {
   { OID id-mgf1 PARAMETERS HashAlgorithm },
   ...  -- Allows for future expansion --
 }
 
```

 where
 
```

 HashAlgorithm ::= AlgorithmIdentifier {
   {OAEP-PSSDigestAlgorithms}
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
 
```

      RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2

**参见**

- PSSParameterSpec
- javax.crypto.spec.OAEPParameterSpec

> *Since 1.5*
