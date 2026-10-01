---
id: "java-en-function-comparator-thencomparinglong"
language: "java"
lang: "en"
category: "function"
name: "Comparator.thenComparingLong"
signature: "default Comparator<T> thenComparingLong(ToLongFunction<? super T> keyExtractor)"
title: "Comparator.thenComparingLong"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Comparator.thenComparingLong

```java
default Comparator<T> thenComparingLong(ToLongFunction<? super T> keyExtractor)
```

Returns a lexicographic-order comparator with a function that
 extracts a `long` sort key.

**参数**

- **keyExtractor** — the function used to extract the long sort key

**返回**

- a lexicographic-order comparator composed of this and then the `long` sort key

**异常**

- **NullPointerException** — if the argument is null.

**参见**

- #comparingLong(ToLongFunction)
- #thenComparing(Comparator)

> *Since 1.8*
