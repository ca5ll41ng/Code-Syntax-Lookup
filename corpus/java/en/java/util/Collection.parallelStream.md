---
id: "java-en-function-collection-parallelstream"
language: "java"
lang: "en"
category: "function"
name: "Collection.parallelStream"
signature: "default Stream<E> parallelStream()"
title: "Collection.parallelStream"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.parallelStream

```java
default Stream<E> parallelStream()
```

Returns a possibly parallel `Stream` with this collection as its
 source.  It is allowable for this method to return a sequential stream.

 

This method should be overridden when the `spliterator`
 method cannot return a spliterator that is `IMMUTABLE`,
 `CONCURRENT`, or late-binding. (See `spliterator`
 for details.)

 The default implementation creates a parallel `Stream` from the
 collection's `Spliterator`.

**返回**

- a possibly parallel `Stream` over the elements in this collection

> *Since 1.8*
