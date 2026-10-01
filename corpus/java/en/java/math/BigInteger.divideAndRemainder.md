---
id: "java-en-function-biginteger-divideandremainder"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.divideAndRemainder"
signature: "public BigInteger[] divideAndRemainder(BigInteger val)"
title: "BigInteger.divideAndRemainder"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.divideAndRemainder

```java
public BigInteger[] divideAndRemainder(BigInteger val)
```

Returns an array of two BigIntegers containing `(this / val)`
 followed by `(this % val)`.

**参数**

- **val** — value by which this BigInteger is to be divided, and the remainder computed.

**返回**

- an array of two BigIntegers: the quotient `(this / val)` is the initial element, and the remainder `(this % val)` is the final element.

**异常**

- **ArithmeticException** — if `val` is zero.
