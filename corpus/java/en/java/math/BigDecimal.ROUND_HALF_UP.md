---
id: "java-en-function-bigdecimal-round_half_up"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_HALF_UP"
signature: "public static final int ROUND_HALF_UP = 4"
title: "BigDecimal.ROUND_HALF_UP"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_HALF_UP

```java
public static final int ROUND_HALF_UP = 4
```

Rounding mode to round towards "nearest neighbor"
 unless both neighbors are equidistant, in which case round up.
 Behaves as for `ROUND_UP` if the discarded fraction is
 &ge; 0.5; otherwise, behaves as for `ROUND_DOWN`.  Note
 that this is the rounding mode that most of us were taught in
 grade school.

> **⚠ Deprecated** — Use `HALF_UP` instead.
