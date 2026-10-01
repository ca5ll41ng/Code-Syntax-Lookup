---
id: "java-en-function-bigdecimal-round_down"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_DOWN"
signature: "public static final int ROUND_DOWN = 1"
title: "BigDecimal.ROUND_DOWN"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_DOWN

```java
public static final int ROUND_DOWN = 1
```

Rounding mode to round towards zero.  Never increments the digit
 prior to a discarded fraction (i.e., truncates).  Note that this
 rounding mode never increases the magnitude of the calculated value.

> **⚠ Deprecated** — Use `DOWN` instead.
