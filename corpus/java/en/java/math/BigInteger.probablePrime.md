---
id: "java-en-function-biginteger-probableprime"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.probablePrime"
signature: "public static BigInteger probablePrime(int bitLength, Random rnd)"
title: "BigInteger.probablePrime"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.probablePrime

```java
public static BigInteger probablePrime(int bitLength, Random rnd)
```

Returns a positive BigInteger that is probably prime, with the
 specified bitLength. The probability that a BigInteger returned
 by this method is composite does not exceed 2-100.

**参数**

- **bitLength** — bitLength of the returned BigInteger.
- **rnd** — source of random bits used to select candidates to be tested for primality.

**返回**

- a BigInteger of `bitLength` bits that is probably prime

**异常**

- **ArithmeticException** — `bitLength < 2` or `bitLength` is too large.

**参见**

- #bitLength()

> *Since 1.4*
