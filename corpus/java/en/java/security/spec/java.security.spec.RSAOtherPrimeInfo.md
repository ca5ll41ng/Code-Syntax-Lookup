---
id: "java-en-function-java-security-spec-rsaotherprimeinfo"
language: "java"
lang: "en"
category: "function"
name: "java.security.spec.RSAOtherPrimeInfo"
title: "RSAOtherPrimeInfo"
directive: "type"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/RSAOtherPrimeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RSAOtherPrimeInfo

This class represents the triplet (prime, exponent, and coefficient)
 inside RSA's OtherPrimeInfo structure, as defined in the
 PKCS#1 v2.2 standard.
 The ASN.1 syntax of RSA's OtherPrimeInfo is as follows:

 
```

 OtherPrimeInfo ::= SEQUENCE {
   prime        INTEGER,
   exponent     INTEGER,
   coefficient  INTEGER
 }

 
```

      RFC 8017: PKCS #1: RSA Cryptography Specifications Version 2.2

**参见**

- RSAPrivateCrtKeySpec
- java.security.interfaces.RSAMultiPrimePrivateCrtKey

> *Since 1.4*
