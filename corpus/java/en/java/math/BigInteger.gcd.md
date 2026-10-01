---
id: "java-en-function-biginteger-gcd"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.gcd"
signature: "public BigInteger gcd(BigInteger val)"
title: "BigInteger.gcd"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.gcd

```java
public BigInteger gcd(BigInteger val)
```

Returns a BigInteger whose value is the greatest common divisor of
 `abs(this)` and `abs(val)`.  Returns 0 if
 `this == 0 && val == 0`.

**参数**

- **val** — value with which the GCD is to be computed.

**返回**

- `GCD(abs(this), abs(val))`
