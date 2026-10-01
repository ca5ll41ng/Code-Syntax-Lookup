---
id: "java-en-function-biginteger-divide"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.divide"
signature: "public BigInteger divide(BigInteger val)"
title: "BigInteger.divide"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.divide

```java
public BigInteger divide(BigInteger val)
```

Returns a BigInteger whose value is `(this / val)`.

**参数**

- **val** — value by which this BigInteger is to be divided.

**返回**

- `this / val`

**异常**

- **ArithmeticException** — if `val` is zero.
