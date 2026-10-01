---
id: "java-en-function-bigdecimal-sqrt"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.sqrt"
signature: "public BigDecimal sqrt(MathContext mc)"
title: "BigDecimal.sqrt"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.sqrt

```java
public BigDecimal sqrt(MathContext mc)
```

Returns an approximation to the square root of `this`
 with rounding according to the context settings.

 

The preferred scale of the returned result is equal to
 `Math.ceilDiv(this.scale(), 2)`. The value of the returned result is
 always within one ulp of the exact decimal value for the
 precision in question.  If the rounding mode is `HALF_UP HALF_UP`, `HALF_DOWN
 HALF_DOWN`, or `HALF_EVEN HALF_EVEN`, the
 result is within one half an ulp of the exact decimal value.

 

Special case:
 
 
-  The square root of a number numerically equal to `ZERO` is numerically equal to `ZERO` with a preferred
 scale according to the general rule above. In particular, for
 `ZERO`, `ZERO.sqrt(mc).equals(ZERO)` is true with
 any `MathContext` as an argument.

**参数**

- **mc** — the context to use.

**返回**

- the square root of `this`.

**异常**

- **ArithmeticException** — if `this` is less than zero.
- **ArithmeticException** — if an exact result is requested (`mc.getPrecision()==0`) and there is no finite decimal expansion of the exact result
- **ArithmeticException** — if `(mc.getRoundingMode()==RoundingMode.UNNECESSARY`) and the exact result cannot fit in `mc.getPrecision()` digits.

**参见**

- BigInteger#sqrt()

> *Since 9*
