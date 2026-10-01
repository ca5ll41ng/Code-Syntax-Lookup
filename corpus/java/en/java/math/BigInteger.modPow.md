---
id: "java-en-function-biginteger-modpow"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.modPow"
signature: "public BigInteger modPow(BigInteger exponent, BigInteger m)"
title: "BigInteger.modPow"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.modPow

```java
public BigInteger modPow(BigInteger exponent, BigInteger m)
```

Returns a BigInteger whose value is
 (thisexponent mod m).  (Unlike `pow`, this
 method permits negative exponents.)

**参数**

- **exponent** — the exponent.
- **m** — the modulus.

**返回**

- thisexponent mod m

**异常**

- **ArithmeticException** — `m` &le; 0 or the exponent is negative and this BigInteger is not relatively prime to `m`.

**参见**

- #modInverse
