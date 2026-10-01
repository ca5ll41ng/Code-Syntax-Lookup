---
id: "java-en-function-numberformat-getroundingmode"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.getRoundingMode"
signature: "public RoundingMode getRoundingMode()"
title: "NumberFormat.getRoundingMode"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.getRoundingMode

```java
public RoundingMode getRoundingMode()
```

Gets the `java.math.RoundingMode` used in this NumberFormat.

 rounding modes should override this method.

**返回**

- The `RoundingMode` used for this NumberFormat.

**异常**

- **UnsupportedOperationException** — if the implementation of this method does not support this operation

**参见**

- #setRoundingMode(RoundingMode)

> *Since 1.6*
