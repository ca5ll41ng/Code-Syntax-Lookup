---
id: "java-en-function-bigdecimal-round_up"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_UP"
signature: "public static final int ROUND_UP = 0"
title: "BigDecimal.ROUND_UP"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_UP

```java
public static final int ROUND_UP = 0
```

Rounding mode to round away from zero.  Always increments the
 digit prior to a nonzero discarded fraction.  Note that this rounding
 mode never decreases the magnitude of the calculated value.

> **⚠ Deprecated** — Use `UP` instead.
