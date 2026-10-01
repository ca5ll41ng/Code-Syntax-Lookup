---
id: "java-en-function-biginteger-parallelmultiply"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.parallelMultiply"
signature: "public BigInteger parallelMultiply(BigInteger val)"
title: "BigInteger.parallelMultiply"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.parallelMultiply

```java
public BigInteger parallelMultiply(BigInteger val)
```

Returns a BigInteger whose value is `(this * val)`.
 When both `this` and `val` are large, typically
 in the thousands of bits, parallel multiply might be used.
 This method returns the exact same mathematical result as
 `multiply`.

 performance when `val == this`.

 parallel multiplication algorithm would typically use more
 CPU resources to compute the result faster, and may do so
 with a slight increase in memory consumption.

**参数**

- **val** — value to be multiplied by this BigInteger.

**返回**

- `this * val`

**参见**

- #multiply

> *Since 19*
