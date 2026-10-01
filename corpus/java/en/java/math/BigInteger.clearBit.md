---
id: "java-en-function-biginteger-clearbit"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.clearBit"
signature: "public BigInteger clearBit(int n)"
title: "BigInteger.clearBit"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.clearBit

```java
public BigInteger clearBit(int n)
```

Returns a BigInteger whose value is equivalent to this BigInteger
 with the designated bit cleared.
 (Computes `(this & ~(1<<n))`.)

**参数**

- **n** — index of bit to clear.

**返回**

- `this & ~(1<<n)`

**异常**

- **ArithmeticException** — `n` is negative.
