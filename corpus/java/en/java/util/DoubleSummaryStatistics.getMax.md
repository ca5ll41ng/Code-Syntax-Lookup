---
id: "java-en-function-doublesummarystatistics-getmax"
language: "java"
lang: "en"
category: "function"
name: "DoubleSummaryStatistics.getMax"
signature: "public final double getMax()"
title: "DoubleSummaryStatistics.getMax"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/DoubleSummaryStatistics.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleSummaryStatistics.getMax

```java
public final double getMax()
```

Returns the maximum recorded value, `Double.NaN` if any recorded
 value was NaN or `Double.NEGATIVE_INFINITY` if no values were
 recorded. Unlike the numerical comparison operators, this method
 considers negative zero to be strictly smaller than positive zero.

**返回**

- the maximum recorded value, `Double.NaN` if any recorded value was NaN or `Double.NEGATIVE_INFINITY` if no values were recorded
