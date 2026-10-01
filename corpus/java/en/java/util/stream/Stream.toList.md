---
id: "java-en-function-stream-tolist"
language: "java"
lang: "en"
category: "function"
name: "Stream.toList"
signature: "default List<T> toList()"
title: "Stream.toList"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.toList

```java
default List<T> toList()
```

Accumulates the elements of this stream into a `List`. The elements in
 the list will be in this stream's encounter order, if one exists. The returned List
 is unmodifiable; calls to any mutator method will always cause
 `UnsupportedOperationException` to be thrown. There are no
 guarantees on the implementation type or serializability of the returned List.

 

The returned instance may be value-based.
 Callers should make no assumptions about the identity of the returned instances.
 Identity-sensitive operations on these instances (reference equality (`==`),
 identity hash code, and synchronization) are unreliable and should be avoided.

 

This is a terminal operation.

 `toCollection`.

 
```
`Collections.unmodifiableList(new ArrayList<>(Arrays.asList(this.toArray())))
 `
```

 that is highly optimized compared to the implementation in this interface.

**返回**

- a List containing the stream elements

> *Since 16*
