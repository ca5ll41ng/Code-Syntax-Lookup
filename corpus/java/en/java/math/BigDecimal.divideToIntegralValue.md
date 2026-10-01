---
id: "java-en-function-bigdecimal-dividetointegralvalue"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.divideToIntegralValue"
signature: "public BigDecimal divideToIntegralValue(BigDecimal divisor)"
title: "BigDecimal.divideToIntegralValue"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.divideToIntegralValue

```java
public BigDecimal divideToIntegralValue(BigDecimal divisor)
```

Returns a `BigDecimal` whose value is the integer part
 of the quotient `(this / divisor)` rounded down.  The
 preferred scale of the result is `(this.scale() -
 divisor.scale())`.

**参数**

- **divisor** — value by which this `BigDecimal` is to be divided.

**返回**

- The integer part of `this / divisor`.

**异常**

- **ArithmeticException** — if `divisor==0`

> *Since 1.5*
