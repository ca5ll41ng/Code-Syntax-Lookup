---
id: "java-en-function-biginteger-shortvalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.shortValueExact"
signature: "public short shortValueExact()"
title: "BigInteger.shortValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.shortValueExact

```java
public short shortValueExact()
```

Converts this `BigInteger` to a `short`, checking
 for lost information.  If the value of this `BigInteger`
 is out of the range of the `short` type, then an
 `ArithmeticException` is thrown.

**返回**

- this `BigInteger` converted to a `short`.

**异常**

- **ArithmeticException** — if the value of `this` will not exactly fit in a `short`.

**参见**

- BigInteger#shortValue

> *Since 1.8*
