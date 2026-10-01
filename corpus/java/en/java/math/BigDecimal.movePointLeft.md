---
id: "java-en-function-bigdecimal-movepointleft"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.movePointLeft"
signature: "public BigDecimal movePointLeft(int n)"
title: "BigDecimal.movePointLeft"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.movePointLeft

```java
public BigDecimal movePointLeft(int n)
```

Returns a `BigDecimal` which is equivalent to this one
 with the decimal point moved `n` places to the left.  If
 `n` is non-negative, the call merely adds `n` to
 the scale.  If `n` is negative, the call is equivalent
 to `movePointRight(-n)`.  The `BigDecimal`
 returned by this call has value (this &times;
 10-n) and scale `max(this.scale()+n,
 0)`.

**参数**

- **n** — number of places to move the decimal point to the left.

**返回**

- a `BigDecimal` which is equivalent to this one with the decimal point moved `n` places to the left.

**异常**

- **ArithmeticException** — if scale overflows.
