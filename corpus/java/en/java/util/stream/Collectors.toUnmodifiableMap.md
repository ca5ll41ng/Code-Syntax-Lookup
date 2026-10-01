---
id: "java-en-function-collectors-tounmodifiablemap"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toUnmodifiableMap"
signature: "public static <T, K, U> Collector<T, ?, Map<K,U>> toUnmodifiableMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)"
title: "Collectors.toUnmodifiableMap"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toUnmodifiableMap

```java
public static <T, K, U> Collector<T, ?, Map<K,U>> toUnmodifiableMap(Function<? super T, ? extends K> keyMapper, Function<? super T, ? extends U> valueMapper)
```

Returns a `Collector` that accumulates the input elements into an
 unmodifiable Map,
 whose keys and values are the result of applying the provided
 mapping functions to the input elements.

 

If the mapped keys contain duplicates (according to
 `equals`), an `IllegalStateException` is
 thrown when the collection operation is performed.  If the mapped keys
 might have duplicates, use `toUnmodifiableMap`
 to handle merging of the values.

 

The returned Collector disallows null keys and values. If either mapping function
 returns null, `NullPointerException` will be thrown.

**参数**

- **the** — type of the input elements
- **the** — output type of the key mapping function
- **the** — output type of the value mapping function
- **keyMapper** — a mapping function to produce keys, must be non-null
- **valueMapper** — a mapping function to produce values, must be non-null

**返回**

- a `Collector` that accumulates the input elements into an unmodifiable Map, whose keys and values are the result of applying the provided mapping functions to the input elements

**异常**

- **NullPointerException** — if either keyMapper or valueMapper is null

**参见**

- #toUnmodifiableMap(Function, Function, BinaryOperator)

> *Since 10*
