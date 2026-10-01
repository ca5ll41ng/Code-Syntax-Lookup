---
id: "java-en-function-bigdecimal-valueof"
language: "java"
lang: "en"
category: "function"
name: "BigDecimal.valueOf"
signature: "public static BigDecimal valueOf(long unscaledVal, int scale)"
title: "BigDecimal.valueOf"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/BigDecimal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BigDecimal.valueOf

```java
public static BigDecimal valueOf(long unscaledVal, int scale)
```

Translates a `long` unscaled value and an
 `int` scale into a `BigDecimal`.

 to a (`long`, `int`) constructor because it allows
 for reuse of frequently used `BigDecimal` values.

**参数**

- **unscaledVal** — unscaled value of the `BigDecimal`.
- **scale** — scale of the `BigDecimal`.

**返回**

- a `BigDecimal` whose value is (unscaledVal &times; 10-scale).
