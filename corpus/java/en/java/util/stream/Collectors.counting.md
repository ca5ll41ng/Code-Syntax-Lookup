---
id: "java-en-function-collectors-counting"
language: "java"
lang: "en"
category: "function"
name: "Collectors.counting"
signature: "public static <T> Collector<T, ?, Long> counting()"
title: "Collectors.counting"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.counting

```java
public static <T> Collector<T, ?, Long> counting()
```

Returns a `Collector` accepting elements of type `T` that
 counts the number of input elements.  If no elements are present, the
 result is 0.

 This produces a result equivalent to:
 
```
`reducing(0L, e -> 1L, Long::sum)
 `
```

**参数**

- **the** — type of the input elements

**返回**

- a `Collector` that counts the input elements
