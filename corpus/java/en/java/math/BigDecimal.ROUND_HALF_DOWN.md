---
id: "java-en-function-bigdecimal-round_half_down"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_HALF_DOWN"
signature: "public static final int ROUND_HALF_DOWN = 5"
title: "BigDecimal.ROUND_HALF_DOWN"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_HALF_DOWN

```java
public static final int ROUND_HALF_DOWN = 5
```

Rounding mode to round towards "nearest neighbor"
 unless both neighbors are equidistant, in which case round
 down.  Behaves as for `ROUND_UP` if the discarded
 fraction is > 0.5; otherwise, behaves as for
 `ROUND_DOWN`.

> **⚠ Deprecated** — Use `HALF_DOWN` instead.
