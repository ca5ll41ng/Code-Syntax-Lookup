---
id: "java-en-function-math-clamp"
language: "java"
lang: "en"
category: "function"
name: "Math.clamp"
signature: "public static int clamp(long value, int min, int max)"
title: "Math.clamp"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Math.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Math.clamp

```java
public static int clamp(long value, int min, int max)
```

Clamps the value to fit between min and max. If the value is less
 than `min`, then `min` is returned. If the value is greater
 than `max`, then `max` is returned. Otherwise, the original
 value is returned.
 

 While the original value of type long may not fit into the int type,
 the bounds have the int type, so the result always fits the int type.
 This allows to use method to safely cast long value to int with
 saturation.

**参数**

- **value** — value to clamp
- **min** — minimal allowed value
- **max** — maximal allowed value

**返回**

- a clamped value that fits into `min..max` interval

**异常**

- **IllegalArgumentException** — if `min > max`

> *Since 21*
