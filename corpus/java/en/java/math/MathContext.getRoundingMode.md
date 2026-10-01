---
id: "java-en-function-mathcontext-getroundingmode"
language: "java"
lang: "en"
category: "function"
name: "MathContext.getRoundingMode"
signature: "public RoundingMode getRoundingMode()"
title: "MathContext.getRoundingMode"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/MathContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MathContext.getRoundingMode

```java
public RoundingMode getRoundingMode()
```

Returns the roundingMode setting.
 This will be one of
 `CEILING`,
 `DOWN`,
 `FLOOR`,
 `HALF_DOWN`,
 `HALF_EVEN`,
 `HALF_UP`,
 `UNNECESSARY`, or
 `UP`.

**返回**

- a `RoundingMode` object which is the value of the `roundingMode` setting
