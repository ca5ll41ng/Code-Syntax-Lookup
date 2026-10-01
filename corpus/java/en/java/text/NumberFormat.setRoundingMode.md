---
id: "java-en-function-numberformat-setroundingmode"
language: "java"
lang: "en"
category: "function"
name: "NumberFormat.setRoundingMode"
signature: "public void setRoundingMode(RoundingMode roundingMode)"
title: "NumberFormat.setRoundingMode"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/NumberFormat.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NumberFormat.setRoundingMode

```java
public void setRoundingMode(RoundingMode roundingMode)
```

Sets the `java.math.RoundingMode` used in this NumberFormat.

 rounding modes should override this method.

**参数**

- **roundingMode** — The `RoundingMode` to be used

**异常**

- **NullPointerException** — if `roundingMode` is `null`
- **UnsupportedOperationException** — if the implementation of this method does not support this operation

**参见**

- #getRoundingMode()

> *Since 1.6*
