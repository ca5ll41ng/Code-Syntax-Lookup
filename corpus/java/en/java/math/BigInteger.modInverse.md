---
id: "java-en-function-biginteger-modinverse"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.modInverse"
signature: "public BigInteger modInverse(BigInteger m)"
title: "BigInteger.modInverse"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.modInverse

```java
public BigInteger modInverse(BigInteger m)
```

Returns a BigInteger whose value is `(this`-1 `mod m)`.

**参数**

- **m** — the modulus.

**返回**

- `this`-1 `mod m`.

**异常**

- **ArithmeticException** — `m` &le; 0, or this BigInteger has no multiplicative inverse mod m (that is, this BigInteger is not relatively prime to m).
