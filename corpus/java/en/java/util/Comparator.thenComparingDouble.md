---
id: "java-en-function-comparator-thencomparingdouble"
language: "java"
lang: "en"
category: "function"
name: "Comparator.thenComparingDouble"
signature: "default Comparator<T> thenComparingDouble(ToDoubleFunction<? super T> keyExtractor)"
title: "Comparator.thenComparingDouble"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.thenComparingDouble

```java
default Comparator<T> thenComparingDouble(ToDoubleFunction<? super T> keyExtractor)
```

Returns a lexicographic-order comparator with a function that
 extracts a `double` sort key.

**参数**

- **keyExtractor** — the function used to extract the double sort key

**返回**

- a lexicographic-order comparator composed of this and then the `double` sort key

**异常**

- **NullPointerException** — if the argument is null.

**参见**

- #comparingDouble(ToDoubleFunction)
- #thenComparing(Comparator)

> *Since 1.8*
