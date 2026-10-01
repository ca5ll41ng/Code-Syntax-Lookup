---
id: "java-en-function-biginteger-longvalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigInteger.longValueExact"
signature: "public long longValueExact()"
title: "BigInteger.longValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigInteger.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigInteger.longValueExact

```java
public long longValueExact()
```

Converts this `BigInteger` to a `long`, checking
 for lost information.  If the value of this `BigInteger`
 is out of the range of the `long` type, then an
 `ArithmeticException` is thrown.

**返回**

- this `BigInteger` converted to a `long`.

**异常**

- **ArithmeticException** — if the value of `this` will not exactly fit in a `long`.

**参见**

- BigInteger#longValue

> *Since 1.8*
