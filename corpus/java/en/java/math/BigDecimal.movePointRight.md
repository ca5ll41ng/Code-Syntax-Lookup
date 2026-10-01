---
id: "java-en-function-bigdecimal-movepointright"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.movePointRight"
signature: "public BigDecimal movePointRight(int n)"
title: "BigDecimal.movePointRight"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.movePointRight

```java
public BigDecimal movePointRight(int n)
```

Returns a `BigDecimal` which is equivalent to this one
 with the decimal point moved `n` places to the right.
 If `n` is non-negative, the call merely subtracts
 `n` from the scale.  If `n` is negative, the call
 is equivalent to `movePointLeft(-n)`.  The
 `BigDecimal` returned by this call has value (this
 &times; 10n) and scale `max(this.scale()-n,
 0)`.

**参数**

- **n** — number of places to move the decimal point to the right.

**返回**

- a `BigDecimal` which is equivalent to this one with the decimal point moved `n` places to the right.

**异常**

- **ArithmeticException** — if scale overflows.
