---
id: "java-en-function-bigdecimal-round_half_even"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_HALF_EVEN"
signature: "public static final int ROUND_HALF_EVEN = 6"
title: "BigDecimal.ROUND_HALF_EVEN"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_HALF_EVEN

```java
public static final int ROUND_HALF_EVEN = 6
```

Rounding mode to round towards the "nearest neighbor"
 unless both neighbors are equidistant, in which case, round
 towards the even neighbor.  Behaves as for
 `ROUND_HALF_UP` if the digit to the left of the
 discarded fraction is odd; behaves as for
 `ROUND_HALF_DOWN` if it's even.  Note that this is the
 rounding mode that minimizes cumulative error when applied
 repeatedly over a sequence of calculations.

> **⚠ Deprecated** — Use `HALF_EVEN` instead.
