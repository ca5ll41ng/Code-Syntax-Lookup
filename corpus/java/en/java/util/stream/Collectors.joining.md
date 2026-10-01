---
id: "java-en-function-collectors-joining"
language: "java"
lang: "en"
category: "function"
name: "Collectors.joining"
signature: "public static Collector<CharSequence, ?, String> joining()"
title: "Collectors.joining"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.joining

```java
public static Collector<CharSequence, ?, String> joining()
```

Returns a `Collector` that concatenates the input elements into a
 `String`, in encounter order.

**返回**

- a `Collector` that concatenates the input elements into a `String`, in encounter order
