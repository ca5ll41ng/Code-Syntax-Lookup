---
id: "java-en-function-bigdecimal-round_unnecessary"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.ROUND_UNNECESSARY"
signature: "public static final int ROUND_UNNECESSARY = 7"
title: "BigDecimal.ROUND_UNNECESSARY"
directive: "field"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.ROUND_UNNECESSARY

```java
public static final int ROUND_UNNECESSARY = 7
```

Rounding mode to assert that the requested operation has an exact
 result, hence no rounding is necessary.  If this rounding mode is
 specified on an operation that yields an inexact result, an
 `ArithmeticException` is thrown.

> **⚠ Deprecated** — Use `UNNECESSARY` instead.
