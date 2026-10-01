---
id: "java-en-function-biginteger-flipbit"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.flipBit"
signature: "public BigInteger flipBit(int n)"
title: "BigInteger.flipBit"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.flipBit

```java
public BigInteger flipBit(int n)
```

Returns a BigInteger whose value is equivalent to this BigInteger
 with the designated bit flipped.
 (Computes `(this ^ (1<<n))`.)

**参数**

- **n** — index of bit to flip.

**返回**

- `this ^ (1<<n)`

**异常**

- **ArithmeticException** — `n` is negative.
