---
id: "java-en-function-collection-stream"
language: "java"
lang: "en"
category: "function"
name: "Collection.stream"
signature: "default Stream<E> stream()"
title: "Collection.stream"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.stream

```java
default Stream<E> stream()
```

Returns a sequential `Stream` with this collection as its source.

 

This method should be overridden when the `spliterator`
 method cannot return a spliterator that is `IMMUTABLE`,
 `CONCURRENT`, or late-binding. (See `spliterator`
 for details.)

 The default implementation creates a sequential `Stream` from the
 collection's `Spliterator`.

**返回**

- a sequential `Stream` over the elements in this collection

> *Since 1.8*
