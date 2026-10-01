---
id: "java-en-function-bigdecimal-round_floor"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_FLOOR"
signature: "public static final int ROUND_FLOOR = 3"
title: "BigDecimal.ROUND_FLOOR"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_FLOOR

```java
public static final int ROUND_FLOOR = 3
```

Rounding mode to round towards negative infinity.  If the
 `BigDecimal` is positive, behave as for
 `ROUND_DOWN`; if negative, behave as for
 `ROUND_UP`.  Note that this rounding mode never
 increases the calculated value.

> **⚠ Deprecated** — Use `FLOOR` instead.
