---
id: "java-en-function-bigdecimal-bytevalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.byteValueExact"
signature: "public byte byteValueExact()"
title: "BigDecimal.byteValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.byteValueExact

```java
public byte byteValueExact()
```

Converts this `BigDecimal` to a `byte`, checking
 for lost information.  If this `BigDecimal` has a
 nonzero fractional part or is out of the possible range for a
 `byte` result then an `ArithmeticException` is
 thrown.

**返回**

- this `BigDecimal` converted to a `byte`.

**异常**

- **ArithmeticException** — if `this` has a nonzero fractional part, or will not fit in a `byte`.

> *Since 1.5*
