---
id: "java-en-function-comparator-thencomparingint"
language: "java"
lang: "en"
category: "function"
name: "Comparator.thenComparingInt"
signature: "default Comparator<T> thenComparingInt(ToIntFunction<? super T> keyExtractor)"
title: "Comparator.thenComparingInt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.thenComparingInt

```java
default Comparator<T> thenComparingInt(ToIntFunction<? super T> keyExtractor)
```

Returns a lexicographic-order comparator with a function that
 extracts an `int` sort key.

**参数**

- **keyExtractor** — the function used to extract the integer sort key

**返回**

- a lexicographic-order comparator composed of this and then the `int` sort key

**异常**

- **NullPointerException** — if the argument is null.

**参见**

- #comparingInt(ToIntFunction)
- #thenComparing(Comparator)

> *Since 1.8*
