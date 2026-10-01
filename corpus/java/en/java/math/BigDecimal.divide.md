---
id: "java-en-function-bigdecimal-divide"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.divide"
signature: "public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)"
title: "BigDecimal.divide"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.divide

```java
public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)
```

Returns a `BigDecimal` whose value is `(this /
 divisor)`, and whose scale is as specified.  If rounding must
 be performed to generate a result with the specified scale, the
 specified rounding mode is applied.

**参数**

- **divisor** — value by which this `BigDecimal` is to be divided.
- **scale** — scale of the `BigDecimal` quotient to be returned.
- **roundingMode** — rounding mode to apply.

**返回**

- `this / divisor`

**异常**

- **ArithmeticException** — if `divisor` is zero, `roundingMode==ROUND_UNNECESSARY` and the specified scale is insufficient to represent the result of the division exactly.
- **IllegalArgumentException** — if `roundingMode` does not represent a valid rounding mode.

**参见**

- #ROUND_UP
- #ROUND_DOWN
- #ROUND_CEILING
- #ROUND_FLOOR
- #ROUND_HALF_UP
- #ROUND_HALF_DOWN
- #ROUND_HALF_EVEN
- #ROUND_UNNECESSARY

> **⚠ Deprecated** — The method `divide` should be used in preference to this legacy method.
