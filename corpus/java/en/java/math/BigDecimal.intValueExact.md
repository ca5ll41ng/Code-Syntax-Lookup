---
id: "java-en-function-bigdecimal-intvalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.intValueExact"
signature: "public int intValueExact()"
title: "BigDecimal.intValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.intValueExact

```java
public int intValueExact()
```

Converts this `BigDecimal` to an `int`, checking
 for lost information.  If this `BigDecimal` has a
 nonzero fractional part or is out of the possible range for an
 `int` result then an `ArithmeticException` is
 thrown.

**返回**

- this `BigDecimal` converted to an `int`.

**异常**

- **ArithmeticException** — if `this` has a nonzero fractional part, or will not fit in an `int`.

> *Since 1.5*
