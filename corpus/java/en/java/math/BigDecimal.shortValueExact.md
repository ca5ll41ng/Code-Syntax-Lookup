---
id: "java-en-function-bigdecimal-shortvalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.shortValueExact"
signature: "public short shortValueExact()"
title: "BigDecimal.shortValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.shortValueExact

```java
public short shortValueExact()
```

Converts this `BigDecimal` to a `short`, checking
 for lost information.  If this `BigDecimal` has a
 nonzero fractional part or is out of the possible range for a
 `short` result then an `ArithmeticException` is
 thrown.

**返回**

- this `BigDecimal` converted to a `short`.

**异常**

- **ArithmeticException** — if `this` has a nonzero fractional part, or will not fit in a `short`.

> *Since 1.5*
