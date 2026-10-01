---
id: "java-en-function-bigdecimal-remainder"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.remainder"
signature: "public BigDecimal remainder(BigDecimal divisor)"
title: "BigDecimal.remainder"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.remainder

```java
public BigDecimal remainder(BigDecimal divisor)
```

Returns a `BigDecimal` whose value is `(this % divisor)`.

 

The remainder is given by
 `this.subtract(this.divideToIntegralValue(divisor).multiply(divisor))`.
 Note that this is not the modulo operation (the result can be
 negative).

**参数**

- **divisor** — value by which this `BigDecimal` is to be divided.

**返回**

- `this % divisor`.

**异常**

- **ArithmeticException** — if `divisor==0`

> *Since 1.5*
