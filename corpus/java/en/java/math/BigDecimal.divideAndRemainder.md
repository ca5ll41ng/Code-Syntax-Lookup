---
id: "java-en-function-bigdecimal-divideandremainder"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.divideAndRemainder"
signature: "public BigDecimal[] divideAndRemainder(BigDecimal divisor)"
title: "BigDecimal.divideAndRemainder"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.divideAndRemainder

```java
public BigDecimal[] divideAndRemainder(BigDecimal divisor)
```

Returns a two-element `BigDecimal` array containing the
 result of `divideToIntegralValue` followed by the result of
 `remainder` on the two operands.

 

Note that if both the integer quotient and remainder are
 needed, this method is faster than using the
 `divideToIntegralValue` and `remainder` methods
 separately because the division need only be carried out once.

**参数**

- **divisor** — value by which this `BigDecimal` is to be divided, and the remainder computed.

**返回**

- a two element `BigDecimal` array: the quotient (the result of `divideToIntegralValue`) is the initial element and the remainder is the final element.

**异常**

- **ArithmeticException** — if `divisor==0`

**参见**

- #divideToIntegralValue(java.math.BigDecimal, java.math.MathContext)
- #remainder(java.math.BigDecimal, java.math.MathContext)

> *Since 1.5*
