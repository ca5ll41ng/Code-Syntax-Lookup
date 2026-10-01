---
id: "java-en-function-bigdecimal-longvalueexact"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.longValueExact"
signature: "public long longValueExact()"
title: "BigDecimal.longValueExact"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.longValueExact

```java
public long longValueExact()
```

Converts this `BigDecimal` to a `long`, checking
 for lost information.  If this `BigDecimal` has a
 nonzero fractional part or is out of the possible range for a
 `long` result then an `ArithmeticException` is
 thrown.

**返回**

- this `BigDecimal` converted to a `long`.

**异常**

- **ArithmeticException** — if `this` has a nonzero fractional part, or will not fit in a `long`.

> *Since 1.5*
