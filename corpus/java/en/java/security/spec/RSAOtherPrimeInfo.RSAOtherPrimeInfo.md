---
id: "java-en-function-rsaotherprimeinfo-rsaotherprimeinfo"
language: "java"
lang: "en"
category: "function"
name: "RSAOtherPrimeInfo.RSAOtherPrimeInfo"
signature: "public RSAOtherPrimeInfo(BigInteger prime, BigInteger primeExponent, BigInteger crtCoefficient)"
title: "RSAOtherPrimeInfo.RSAOtherPrimeInfo"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/RSAOtherPrimeInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RSAOtherPrimeInfo.RSAOtherPrimeInfo

```java
public RSAOtherPrimeInfo(BigInteger prime, BigInteger primeExponent, BigInteger crtCoefficient)
```

Creates a new `RSAOtherPrimeInfo`
 given the prime, primeExponent, and
 crtCoefficient as defined in PKCS#1.

**参数**

- **prime** — the prime factor of n.
- **primeExponent** — the exponent.
- **crtCoefficient** — the Chinese Remainder Theorem coefficient.

**异常**

- **NullPointerException** — if any of the parameters, i.e. `prime`, `primeExponent`, `crtCoefficient`, is null.
