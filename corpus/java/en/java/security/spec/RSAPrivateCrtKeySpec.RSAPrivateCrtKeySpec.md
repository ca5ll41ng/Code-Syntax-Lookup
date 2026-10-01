---
id: "java-en-function-rsaprivatecrtkeyspec-rsaprivatecrtkeyspec"
language: "java"
lang: "en"
category: "function"
name: "RSAPrivateCrtKeySpec.RSAPrivateCrtKeySpec"
signature: "public RSAPrivateCrtKeySpec(BigInteger modulus, BigInteger publicExponent, BigInteger privateExponent, BigInteger primeP, BigInteger primeQ, BigInteger primeExponentP, BigInteger primeExponentQ, BigInteger crtCoefficient)"
title: "RSAPrivateCrtKeySpec.RSAPrivateCrtKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/RSAPrivateCrtKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RSAPrivateCrtKeySpec.RSAPrivateCrtKeySpec

```java
public RSAPrivateCrtKeySpec(BigInteger modulus, BigInteger publicExponent, BigInteger privateExponent, BigInteger primeP, BigInteger primeQ, BigInteger primeExponentP, BigInteger primeExponentQ, BigInteger crtCoefficient)
```

Creates a new `RSAPrivateCrtKeySpec`.

**参数**

- **modulus** — the modulus n
- **publicExponent** — the public exponent e
- **privateExponent** — the private exponent d
- **primeP** — the prime factor p of n
- **primeQ** — the prime factor q of n
- **primeExponentP** — this is d mod (p-1)
- **primeExponentQ** — this is d mod (q-1)
- **crtCoefficient** — the Chinese Remainder Theorem coefficient q-1 mod p
