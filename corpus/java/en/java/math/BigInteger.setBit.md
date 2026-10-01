---
id: "java-en-function-biginteger-setbit"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.setBit"
signature: "public BigInteger setBit(int n)"
title: "BigInteger.setBit"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.setBit

```java
public BigInteger setBit(int n)
```

Returns a BigInteger whose value is equivalent to this BigInteger
 with the designated bit set.  (Computes `(this | (1<<n))`.)

**参数**

- **n** — index of bit to set.

**返回**

- `this | (1<<n)`

**异常**

- **ArithmeticException** — `n` is negative.
