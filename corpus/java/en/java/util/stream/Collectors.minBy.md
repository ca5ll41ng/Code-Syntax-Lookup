---
id: "java-en-function-collectors-minby"
language: "java"
lang: "en"
category: "function"
name: "Collectors.minBy"
signature: "public static <T> Collector<T, ?, Optional<T>> minBy(Comparator<? super T> comparator)"
title: "Collectors.minBy"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.minBy

```java
public static <T> Collector<T, ?, Optional<T>> minBy(Comparator<? super T> comparator)
```

Returns a `Collector` that produces the minimal element according
 to a given `Comparator`, described as an `Optional`.

 This produces a result equivalent to:
 
```
`reducing(BinaryOperator.minBy(comparator))
 `
```

**参数**

- **the** — type of the input elements
- **comparator** — a `Comparator` for comparing elements

**返回**

- a `Collector` that produces the minimal value
