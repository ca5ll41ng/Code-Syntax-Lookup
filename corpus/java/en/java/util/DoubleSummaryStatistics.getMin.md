---
id: "java-en-function-doublesummarystatistics-getmin"
language: "java"
lang: "en"
category: "function"
name: "DoubleSummaryStatistics.getMin"
signature: "public final double getMin()"
title: "DoubleSummaryStatistics.getMin"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/DoubleSummaryStatistics.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleSummaryStatistics.getMin

```java
public final double getMin()
```

Returns the minimum recorded value, `Double.NaN` if any recorded
 value was NaN or `Double.POSITIVE_INFINITY` if no values were
 recorded. Unlike the numerical comparison operators, this method
 considers negative zero to be strictly smaller than positive zero.

**返回**

- the minimum recorded value, `Double.NaN` if any recorded value was NaN or `Double.POSITIVE_INFINITY` if no values were recorded
