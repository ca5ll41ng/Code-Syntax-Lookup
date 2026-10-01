---
id: "java-en-function-bigdecimal-round_ceiling"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_CEILING"
signature: "public static final int ROUND_CEILING = 2"
title: "BigDecimal.ROUND_CEILING"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_CEILING

```java
public static final int ROUND_CEILING = 2
```

Rounding mode to round towards positive infinity.  If the
 `BigDecimal` is positive, behaves as for
 `ROUND_UP`; if negative, behaves as for
 `ROUND_DOWN`.  Note that this rounding mode never
 decreases the calculated value.

> **⚠ Deprecated** — Use `CEILING` instead.
