---
id: "java-en-function-mathcontext-mathcontext"
language: "java"
lang: "en"
category: "function"
name: "MathContext.MathContext"
signature: "public MathContext(int setPrecision)"
title: "MathContext.MathContext"
directive: "method"
module: "java.base/java.math"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/math/MathContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MathContext.MathContext

```java
public MathContext(int setPrecision)
```

Constructs a new `MathContext` with the specified
 precision and the `HALF_UP HALF_UP` rounding
 mode.

**参数**

- **setPrecision** — The non-negative `int` precision setting.

**异常**

- **IllegalArgumentException** — if the `setPrecision` parameter is less than zero.
