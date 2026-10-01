---
id: "java-en-function-biginteger-remainder"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.remainder"
signature: "public BigInteger remainder(BigInteger val)"
title: "BigInteger.remainder"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.remainder

```java
public BigInteger remainder(BigInteger val)
```

Returns a BigInteger whose value is `(this % val)`.

**参数**

- **val** — value by which this BigInteger is to be divided, and the remainder computed.

**返回**

- `this % val`

**异常**

- **ArithmeticException** — if `val` is zero.
