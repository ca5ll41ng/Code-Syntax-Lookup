---
id: "java-en-function-valuerange-of"
language: "java"
lang: "en"
category: "function"
name: "ValueRange.of"
signature: "public static ValueRange of(long min, long max)"
title: "ValueRange.of"
directive: "method"
module: "java.base/java.time.temporal"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/temporal/ValueRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ValueRange.of

```java
public static ValueRange of(long min, long max)
```

Obtains a fixed value range.
 

 This factory obtains a range where the minimum and maximum values are fixed.
 For example, the ISO month-of-year always runs from 1 to 12.

**参数**

- **min** — the minimum value
- **max** — the maximum value

**返回**

- the ValueRange for min, max, not null

**异常**

- **IllegalArgumentException** — if the minimum is greater than the maximum
