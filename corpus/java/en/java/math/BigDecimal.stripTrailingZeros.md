---
id: "java-en-function-bigdecimal-striptrailingzeros"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.stripTrailingZeros"
signature: "public BigDecimal stripTrailingZeros()"
title: "BigDecimal.stripTrailingZeros"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.stripTrailingZeros

```java
public BigDecimal stripTrailingZeros()
```

Returns a `BigDecimal` which is numerically equal to
 this one but with any trailing zeros removed from the
 representation.  For example, stripping the trailing zeros from
 the `BigDecimal` value `600.0`, which has
 [`BigInteger`, `scale`] components equal to
 [6000, 1], yields `6E2` with [`BigInteger`,
 `scale`] components equal to [6, -2].  If
 this BigDecimal is numerically equal to zero, then
 `BigDecimal.ZERO` is returned.

**返回**

- a numerically equal `BigDecimal` with any trailing zeros removed.

**异常**

- **ArithmeticException** — if scale overflows.

> *Since 1.5*
