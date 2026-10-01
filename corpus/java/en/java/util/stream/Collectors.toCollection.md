---
id: "java-en-function-collectors-tocollection"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toCollection"
signature: "public static <T, C extends Collection<T>> Collector<T, ?, C> toCollection(Supplier<C> collectionFactory)"
title: "Collectors.toCollection"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toCollection

```java
public static <T, C extends Collection<T>> Collector<T, ?, C> toCollection(Supplier<C> collectionFactory)
```

Returns a `Collector` that accumulates the input elements into a
 new `Collection`, in encounter order.  The `Collection` is
 created by the provided factory.

**参数**

- **the** — type of the input elements
- **the** — type of the resulting `Collection`
- **collectionFactory** — a supplier providing a new empty `Collection` into which the results will be inserted

**返回**

- a `Collector` which collects all the input elements into a `Collection`, in encounter order
