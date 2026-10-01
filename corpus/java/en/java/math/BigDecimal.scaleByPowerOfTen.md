---
id: "java-en-function-bigdecimal-scalebypoweroften"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.scaleByPowerOfTen"
signature: "public BigDecimal scaleByPowerOfTen(int n)"
title: "BigDecimal.scaleByPowerOfTen"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.scaleByPowerOfTen

```java
public BigDecimal scaleByPowerOfTen(int n)
```

Returns a BigDecimal whose numerical value is equal to
 (`this` * 10n).  The scale of
 the result is `(this.scale() - n)`.

**参数**

- **n** — the exponent power of ten to scale by

**返回**

- a BigDecimal whose numerical value is equal to (`this` * 10n)

**异常**

- **ArithmeticException** — if the scale would be outside the range of a 32-bit integer.

> *Since 1.5*
