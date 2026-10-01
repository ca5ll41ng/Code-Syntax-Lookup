---
id: "java-en-function-basestream-spliterator"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.spliterator"
signature: "Spliterator<T> spliterator()"
title: "BaseStream.spliterator"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.spliterator

```java
Spliterator<T> spliterator()
```

Returns a spliterator for the elements of this stream.

 

This is a terminal
 operation.

 This operation is provided as an "escape hatch" to enable
 arbitrary client-controlled pipeline traversals in the event that the
 existing operations are not sufficient to the task.

 

 The returned spliterator should report the set of characteristics derived
 from the stream pipeline (namely the characteristics derived from the
 stream source spliterator and the intermediate operations).
 Implementations may report a sub-set of those characteristics.  For
 example, it may be too expensive to compute the entire set for some or
 all possible stream pipelines.

**返回**

- the element spliterator for this stream
