---
id: "java-en-function-bigdecimal-setscale"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.setScale"
signature: "public BigDecimal setScale(int newScale, RoundingMode roundingMode)"
title: "BigDecimal.setScale"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.setScale

```java
public BigDecimal setScale(int newScale, RoundingMode roundingMode)
```

Returns a `BigDecimal` whose scale is the specified
 value, and whose unscaled value is determined by multiplying or
 dividing this `BigDecimal`'s unscaled value by the
 appropriate power of ten to maintain its overall value.  If the
 scale is reduced by the operation, the unscaled value must be
 divided (rather than multiplied), and the value may be changed;
 in this case, the specified rounding mode is applied to the
 division.

 this method do not result in the original object being
 modified, contrary to the usual convention of having methods
 named setX mutate field `X`.
 Instead, `setScale` returns an object with the proper
 scale; the returned object may or may not be newly allocated.

**参数**

- **newScale** — scale of the `BigDecimal` value to be returned.
- **roundingMode** — The rounding mode to apply.

**返回**

- a `BigDecimal` whose scale is the specified value, and whose unscaled value is determined by multiplying or dividing this `BigDecimal`'s unscaled value by the appropriate power of ten to maintain its overall value.

**异常**

- **ArithmeticException** — if `roundingMode==UNNECESSARY` and the specified scaling operation would require rounding.

**参见**

- RoundingMode

> *Since 1.5*
