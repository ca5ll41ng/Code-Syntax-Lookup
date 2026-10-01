---
id: "java-en-function-rsamultiprimeprivatecrtkeyspec-rsamultiprimeprivatecrtkeyspec"
language: "java"
lang: "en"
category: "function"
name: "RSAMultiPrimePrivateCrtKeySpec.RSAMultiPrimePrivateCrtKeySpec"
signature: "public RSAMultiPrimePrivateCrtKeySpec(BigInteger modulus, BigInteger publicExponent, BigInteger privateExponent, BigInteger primeP, BigInteger primeQ, BigInteger primeExponentP, BigInteger primeExponentQ, BigInteger crtCoefficient, RSAOtherPrimeInfo[] otherPrimeInfo)"
title: "RSAMultiPrimePrivateCrtKeySpec.RSAMultiPrimePrivateCrtKeySpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/RSAMultiPrimePrivateCrtKeySpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RSAMultiPrimePrivateCrtKeySpec.RSAMultiPrimePrivateCrtKeySpec

```java
public RSAMultiPrimePrivateCrtKeySpec(BigInteger modulus, BigInteger publicExponent, BigInteger privateExponent, BigInteger primeP, BigInteger primeQ, BigInteger primeExponentP, BigInteger primeExponentQ, BigInteger crtCoefficient, RSAOtherPrimeInfo[] otherPrimeInfo)
```

Creates a new `RSAMultiPrimePrivateCrtKeySpec`.

 

Note that the contents of `otherPrimeInfo`
 are copied to protect against subsequent modification when
 constructing this object.

**参数**

- **modulus** — the modulus n
- **publicExponent** — the public exponent e
- **privateExponent** — the private exponent d
- **primeP** — the prime factor p of n
- **primeQ** — the prime factor q of n
- **primeExponentP** — this is d mod (p-1)
- **primeExponentQ** — this is d mod (q-1)
- **crtCoefficient** — the Chinese Remainder Theorem coefficient q-1 mod p
- **otherPrimeInfo** — triplets of the rest of primes, null can be specified if there are only two prime factors (p and q)

**异常**

- **NullPointerException** — if any of the specified parameters except `otherPrimeInfo` is null
- **IllegalArgumentException** — if an empty, i.e. 0-length, `otherPrimeInfo` is specified
